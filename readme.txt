=== pzForms ===
Contributors:      peakzebra
Tags:              block
Tested up to:      6.7
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Here's a way to build forms with blocks.
== Description ==

pzforms (PeakZebra Forms) is a plugin that allows you to build forms with blocks.

Before you can use it, you need to set the options found in the pzforms settings page. The key 
is reserved for future use, but you may as well set it with a strong alpha-numeric string.

Once the settings are saved, you can use it. To use it, you first place a "pzforms" 
block in your page. 

Then, you can add any of the other blocks to your form. You are required to insert 
a single "pzsubmit" block to submit the form.

If you want to add a captcha, you can add a "pzcaptcha" block, but you'll need to 
obtain a reCAPTCHA key from Google and enter it into the pzforms settings page.

When the user submits the form, the data is sent to the email address you entered 
in the pzforms settings page, with the data identified by the name you entered in 
the field name setting for each field block. All of the data is sent as a JSON 
object, so you'll need to parse it when you get it.

Optionally, you can create your own PHP code to handle the form submission. 
If you do, you can use the "pzformhandler" field in the pzform block to specify 
the name of a post with the custom post type "pzformhandler" that will contain 
whatever PHP you like. The field values will be available as variables with the 
names of the field names you used in the form. The regular form handler won't run, 
so if you want to send an email, you'll need to do that from your PHP code.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/peakforms` directory, or 
install the plugin through the WordPress plugins screen directly.
2. Make sure you've activated the plugin. 
3. Go to the pzforms settings page and enter values for the options.
4. When next editing a page or post, you should see all the pzforms blocks in a peakzebra
section of the block inserter.

== Frequently Asked Questions ==

= Where can I go for help? =

You can go to the [PeakZebra support site](https://peakzebra.com/support) and 
use the contact form to send us a message.

= Can I write my data to a database table? =

Yes, you can. You can use the "pzformhandler" block to specify the name of a post 
with the custom post type "pzformhandler" that will contain whatever PHP you like. 
You're perfectly free to write the data to a database table. Note that you should be 
very careful about the security of the data you're writing to the database.


== Screenshots ==

1. A sample form, viewed in the editor.
2. The form as it appears in the frontend.
3. The settings page for the plugin.


== Changelog ==

= 1.0.0 =
* Initial release

== Other Possibilities ==

The pzforms plugin is built on top of the [PeakZebra Blocks](https://peakzebra.com/blocks) plugin.
This plugin is a powerful (premium)tool for building complex pages with WordPress. It uses a 
prebuilt set of database tables which make storage of commonly used data very efficient. 
You can also add your own JavaScript verification code to any blocks where you need it and 
do so in a way that is secure and easy to maintain. PeakZebra.com for more information.


