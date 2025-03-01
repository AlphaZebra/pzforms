<?php
/**
 * Premium PZForms core database setup
 *
 * @package pzforms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
} 

function pz_onActivate() {
	global $wpdb;
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php');
  
	$charset = $wpdb->get_charset_collate();
	$table_str = $wpdb->prefix . "pz_table_str";
  
	// Add is_help meta to all existing users
	$users = get_users();
	foreach ($users as $user) {
		// Only add if it doesn't already exist
		if (!get_user_meta($user->ID, 'is_help', true)) {
			add_user_meta($user->ID, 'is_help', true);
		}
	}
  
	// this table contains the field definitions for all the other tables in the pz system. 
	dbDelta("CREATE TABLE $table_str (
	  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	  table_name varchar(255) NOT NULL DEFAULT '',
	  field_string varchar(2000) NOT NULL DEFAULT '',
	  created varchar(12) NOT NULL DEFAULT '',
	  PRIMARY KEY  (id)
	) $charset;");
  
	// fill the table with field definition records for all the tables... 
	// start with person
  
	$table_name = $wpdb->prefix . "pz_person";
  
	$item = array();
	$item['id'] = null;
	$item['table_name'] = 'pz_person';
	$item['field_string'] = "CREATE TABLE $table_name ( 
	  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	  tenant_ID varchar(20) NOT NULL DEFAULT '',
	  firstname varchar(20) NOT NULL DEFAULT '',
	  lastname varchar(30) NOT NULL DEFAULT '',
	  title varchar(30) NOT NULL DEFAULT '',
	  company varchar(60) NOT NULL DEFAULT '',
	  addr_line1 varchar(60) NOT NULL DEFAULT '',
	  addr_line2 varchar(60) NOT NULL DEFAULT '',
	  addr_city varchar(60) NOT NULL DEFAULT '',
	  addr_state varchar(2) NOT NULL DEFAULT '',
	  addr_zip varchar(12) NOT NULL DEFAULT '',
	  email varchar(60) NOT NULL DEFAULT '',
	  phone1 varchar(20) NOT NULL DEFAULT '',
	  phone1_type varchar(20) NOT NULL DEFAULT '', 
	  phone2 varchar(20) NOT NULL DEFAULT '',
	  phone2_type varchar(20) NOT NULL DEFAULT '',
	  username varchar(20) NOT NULL DEFAULT '',
	  has_notes int(4) NOT NULL DEFAULT 0,
	  last_contact date NOT NULL DEFAULT '2023-01-01',
	  tags varchar(255) NOT NULL DEFAULT '',
	  pz_level varchar(12) NOT NULL DEFAULT '',
	  pz_status varchar(10) NOT NULL DEFAULT '', 
	  pz_tags varchar(120) NOT NULL DEFAULT '',
	  expires date NOT NULL DEFAULT '2023-01-01',
	  created varchar(12) NOT NULL DEFAULT '',
		PRIMARY KEY  (id)
	) $charset;";
  
  handle_def_record($item);

  // interaction table
$table_name = $wpdb->prefix . "pz_interaction";

$item = array();
$item['id'] = null;
$item['table_name'] = 'pz_interaction';
$item['field_string'] = "CREATE TABLE $table_name (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  per_id bigint(20) NOT NULL DEFAULT 1,
  summary varchar(255) NOT NULL DEFAULT '',
  details varchar(800) NOT NULL DEFAULT '',
  created varchar(12) NOT NULL DEFAULT '',
  PRIMARY KEY  (id)
) $charset;";

handle_def_record($item);

// project
$table_name = $wpdb->prefix . "pz_project";

$item = array();
$item['id'] = null;
$item['table_name'] = 'pz_project';
$item['field_string'] = "CREATE TABLE $table_name (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  project_name varchar(80) NOT NULL DEFAULT '',
  tenant_ID varchar(20) NOT NULL DEFAULT '',
  project_status varchar(20) NOT NULL DEFAULT '',
  project_lead bigint(20) NOT NULL DEFAULT 1,
  project_lead_name varchar(120) NOT NULL DEFAULT '',
  team_members varchar(40) NOT NULL DEFAULT '',
  project_description varchar(500) NOT NULL DEFAULT '',
  kickoff_date varchar(12) NOT NULL DEFAULT '',
  due_date varchar(12) NOT NULL DEFAULT '',
  budget varchar(20) NOT NULL DEFAULT '',
  tasks smallint(5) unsigned NOT NULL DEFAULT 0, 
  created varchar(12) NOT NULL DEFAULT '',
  PRIMARY KEY  (id)
) $charset;";

handle_def_record($item);

// calendar
$table_name = $wpdb->prefix . "pz_calendar";

$item = array();
$item['id'] = null;
$item['table_name'] = 'pz_calendar';
$item['field_string'] = "CREATE TABLE $table_name (
  cal_event_ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  tenant_ID varchar(20) NOT NULL DEFAULT '',
  clientID bigint(20) unsigned NOT NULL,
  category varchar(20) NOT NULL DEFAULT '',
  event_name varchar(60) NOT NULL DEFAULT '',
  event_detail varchar(500) NOT NULL DEFAULT '',
  created varchar(12) NOT NULL DEFAULT '',
  PRIMARY KEY  (cal_event_id)
) $charset;";

handle_def_record($item);

// cal_meeting_type
$table_name = $wpdb->prefix . "pz_cal_meeting_type";

$item = array();
$item['id'] = null;
$item['table_name'] = 'pz_cal_meeting_type';
$item['field_string'] = "CREATE TABLE $table_name (
  cal_event_type_ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  tenant_ID varchar(20) NOT NULL DEFAULT '',
  clientID bigint(20) unsigned NOT NULL,
  meeting_name varchar(60) NOT NULL DEFAULT '',
  meeting_description varchar(500) NOT NULL DEFAULT '',
  created varchar(12) NOT NULL DEFAULT '',
  PRIMARY KEY  (cal_event_type_id)
) $charset;";

handle_def_record($item);

// cal_availability
$table_name = $wpdb->prefix . "pz_cal_availability";

$item = array();
$item['id'] = null;
$item['table_name'] = 'pz_cal_availability';
$item['field_string'] = "CREATE TABLE $table_name (
  cal_avail_date_ID bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  tenant_ID varchar(20) NOT NULL DEFAULT '',
  clientID bigint(20) unsigned NOT NULL DEFAULT 1,
  cal_event_type_id bigint(20) unsigned NOT NULL DEFAULT 1,
  cal_avail_slots varchar(100) NOT NULL DEFAULT '',
  created varchar(12) NOT NULL DEFAULT '',
  PRIMARY KEY  (cal_avail_date_ID)
) $charset;";

handle_def_record($item);

// task
$table_name = $wpdb->prefix . "pz_task";

$item = array();
$item['id'] = null;
$item['table_name'] = 'pz_task';
$item['field_string'] = "CREATE TABLE $table_name (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  tenant_id varchar(20) NOT NULL DEFAULT '',
  app_id varchar(20) NOT NULL DEFAULT '',
  task_status varchar(20) NOT NULL DEFAULT '',
  project_id bigint(20) unsigned NOT NULL DEFAULT 1,
  task_name varchar(200) NOT NULL DEFAULT '',
  kickoff_date varchar(12) NOT NULL DEFAULT '',
  due_date varchar(12) NOT NULL DEFAULT '',
  task_assignee varchar(180) NOT NULL DEFAULT 'unassigned',
  task_priority varchar(2) NOT NULL DEFAULT '0',
  created varchar(12) NOT NULL DEFAULT '',
  PRIMARY KEY  (id)
) $charset;";

handle_def_record($item);

  // build the database
  pz_build_database();

}


function handle_def_record($item) {
    global $wpdb;
    require_once( ABSPATH . 'wp-admin/includes/upgrade.php');

    $results = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}pz_table_str WHERE table_name = '{$item['table_name']}'", ARRAY_A );
   
    if( isset($results[0])) {
      $wpdb->update( "{$wpdb->prefix}pz_table_str", $item, array('table_name' => $item['table_name']) );
    } else {
      if( $wpdb->insert( "{$wpdb->prefix}pz_table_str", $item ) <= 0 ) {  
        var_dump( $wpdb );
        exit;
      }
    }
    return true;
  }

  function pz_build_database() {
	global $wpdb;
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php');

	$charset = $wpdb->get_charset_collate();
	$table_str = $wpdb->prefix . "pz_table_str";

	// get all the tables from the table_str table
	$tables = $wpdb->get_results( "SELECT * FROM {$table_str}", ARRAY_A );

	// loop through the tables and build them
	foreach ($tables as $table) {
		dbDelta($table['field_string']);
	}	

	
  }
