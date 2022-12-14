/* Discovery URL troubleshooting Div */
function mooauth_get_discovery_troubleshooting(discovery_url,mo_oauth_input,appId) {
    jQuery("#mo-oauth-troubleshooting-ul").empty();
    jQuery(".mo-oauth-troubleshooting").css("background-color","antiquewhite");
    jQuery(".mo-oauth-troubleshooting h3").text("Troubleshooting:");
    jQuery("#mo-oauth-unable-to-connect").empty();
    if(undefined != mo_oauth_input){
        jQuery("#discInput").val(mo_oauth_input);
        var inputs = mo_oauth_input.split(" ");
        for(i in inputs){
            if('Domain' === inputs[i]){
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Add prefix http or https to the domain name </li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Try adding/removing port number from the domain name </li>");
            }else if('Tenant' === inputs[i] && 'azureb2c' === appId){
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Tenant name is a portain of your Azure B2C domain. For example: if the domain is <b> example.onmicrosoft.com</b> then tenant name should be <b>'example'</b>.</li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Check if you have added correct Tenant name  <a href='https://plugins.miniorange.com/azure-b2c-ad-single-sign-on-wordpress-sso-oauth-openid-connect#tenant' target=_blank>  Find tenant name here </a> </li>");
            }else if('Policy' === inputs[i]){
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Check if you have added correct Policy name <a href='https://plugins.miniorange.com/azure-b2c-ad-single-sign-on-wordpress-sso-oauth-openid-connect#step_azure_b2c_policy' target=_blank>  Find Policy name here </a> </li>");                
            }else{
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Check if you have added correct "+inputs[i]+" name </li>");
            }
        }
        
    }
    jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Click on the discovery endpoint and check if you are receiving OIDC metadata <a href='"+ discovery_url +"' target=_blank> "+ discovery_url+" </li>");
}

function mooauth_get_suggestion_troubleshooting(input) {
    jQuery("#mo-oauth-troubleshooting-ul").empty();
    jQuery("#mo-oauth-unable-to-connect").empty();
    jQuery(".mo-oauth-troubleshooting").css("background-color","#F0F8FF");
    jQuery(".mo-oauth-troubleshooting").show();
            if('timeExceed' === input){
                jQuery(".mo-oauth-troubleshooting h3").text("Troubleshooting:")
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure that the correct client id input is given </li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure that the correct redirect URI entered at your Provider while setting up the SSO app. </li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure that you have entered the correct scope. </li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure that you have entered the correct userinfo endpoint. </li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> To ensure these configuration please click on the <b>Back</b> button.</li>");
                jQuery("#mo-oauth-unable-to-connect").append("<h4 id='mo-oauth-unable-to-connect' style='display:inline-block'>Unable to enter the credentials, please click on Re-run test button.</h4>");
            }else if('noAccessToken' === input){
                jQuery(".mo-oauth-troubleshooting h3").text("Troubleshooting:")
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure that the correct client secret input is given.</li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure you have entered the correct Token endpoint.</li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Just click on back button, on that Summery page, try multiple combinations of <b>Send client credentials</b> in Header & Body.</li>");
            }else if('general' === input){
                jQuery(".mo-oauth-troubleshooting h3").text("Troubleshooting: if user information is not received")
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure that your developer application is setup properly.</li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure you have the sufficient permission for the developer application at your provider's side. </li>");
                jQuery("#mo-oauth-troubleshooting-ul").append("<li class=mo-oauth-troubleshooting-item> Make sure that you have entered userinfo endpoint correctly.</li>");
            }
       }


