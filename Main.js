/*----------------------------------------------Event Listeners--------------------------------------------*/
window.addEventListener("load",()=>{
    let send_button = document.getElementById("send_button");
    let schedule_meeting_checkbox = document.getElementById("schedule_meeting_checkbox");
    let discuss_job_checkbox = document.getElementById("discuss_job_checkbox");
    let schedule_meeting_time_done_button = document.getElementById("schedule_meeting_time_done_button");
    let discuss_meeting_dialog_done_button = document.getElementById("discuss_meeting_dialog_done_button");

    // send_button.addEventListener("click", contactSend);
    schedule_meeting_checkbox.addEventListener("click", showScheduleMeetingDialog);
    discuss_job_checkbox.addEventListener("click", showDiscussJobDialog);
    schedule_meeting_time_done_button.addEventListener("click", closeDatePicker);
    discuss_meeting_dialog_done_button.addEventListener("click", closeDiscussMeetingDialog);
});

/*----------------------------------------------Functions---------------------------------------------------*/

function contactSend(evt){
    //Get all input elements
    let name_and_lastname_input = document.getElementById("name_and_lastname_input");
    let company_input = document.getElementById("company_input");
    let schedule_meeting_checkbox = document.getElementById("schedule_meeting_checkbox");
    let discuss_job_checkbox = document.getElementById("discuss_job_checkbox");
    let phone_number_input = document.getElementById("phone_number_input");
    let email_input = document.getElementById("email_input");
    let message_textarea_input = document.getElementById("message_textarea_input");

    //get input values
    let name_and_lastname = name_and_lastname_input.value;
    let company = company_input.value;

    if(schedule_meeting_checkbox.checked == true) {
        let schedule_text = document.getElementById("schedule_text");
        schedule_text = schedule_text.lastChild.value;
    }

    if(discuss_job_checkbox.checked == true){
        let link_to_job_posting = document.getElementById("link_to_job_posting");
        let checked_job_type = document.getElementById("checked_job_types");

        let job_posting_link = link_to_job_posting.value;
        let job_type = checked_job_type.lastChild.value;
    }

    if(phone_number_input.length != 0) {
        let phone_number = phone_number_input.value;
    }

    let email = email_input.value;

    if(message_textarea_input.length != 0){
        let message = message_textarea_input.value;
    }
}

function showScheduleMeetingDialog(evt){

    let schedule_meeting_checkbox = document.getElementById("schedule_meeting_checkbox");

    if(schedule_meeting_checkbox.checked == true){
        let schedule_meeting_dialog = document.getElementById("schedule_meeting_dialog")

        schedule_meeting_dialog.showModal();
    }else if(schedule_meeting_checkbox.checked == false){

        let schedule_text = document.getElementById("schedule_text");

        if(schedule_text.hasChildNodes()) {
            while(schedule_text.hasChildNodes()) {
                schedule_text.removeChild(schedule_text.lastChild);
            }
        }
    }
}

function showDiscussJobDialog(evt){

    let discuss_job_checkbox = document.getElementById("discuss_job_checkbox");

    if(discuss_job_checkbox.checked == true){
        let discuss_meeting_dialog = document.getElementById("discuss_meeting_dialog")

        discuss_meeting_dialog.showModal();
    }else if(discuss_job_checkbox.checked == false){
        let checked_job_types = document.getElementById("checked_job_types");

        if(checked_job_types.hasChildNodes()){
            while(checked_job_types.hasChildNodes()){
                checked_job_types.removeChild(checked_job_types.lastChild);
            }
        }
    }
}

function closeDatePicker(evt){

    //get dialog , date and time value , (Schedule time to talk) divider
    let schedule_meeting_dialog = document.getElementById("schedule_meeting_dialog");
    let schedule_text = document.getElementById("schedule_text");
    let schedule_meeting_time = document.getElementById("schedule_meeting_time")

    //Format the given date
    let date = new Date(schedule_meeting_time.value);

    //create new divider
    let chosenDate = document.createElement("div");

    if(date == "Invalid Date"){
        alert("Invalid Date")
    }else {
        if(schedule_text.hasChildNodes()) {
            //refresh the written text
            schedule_text.removeChild(schedule_text.lastChild);
            //Create Text node
            let dateValue = document.createTextNode(date);

            //Append the chosen time as a visible text in the form
            chosenDate.appendChild(dateValue);
            schedule_text.appendChild(chosenDate);

            //set chosen date divider attributes
            chosenDate.setAttribute("class", "date_chosen")

            //close the dialog box
            schedule_meeting_dialog.close();
        }else{
            //Create Text node
            let dateValue = document.createTextNode(date);

            //Append the chosen time as a visible text in the form
            chosenDate.appendChild(dateValue);
            schedule_text.appendChild(chosenDate);

            //set chosen date divider attributes
            chosenDate.setAttribute("class", "date_chosen")

            //close the dialog box
            schedule_meeting_dialog.close();
        }
    }

}

function closeDiscussMeetingDialog(evt){
    let checked_job_types = document.getElementById("checked_job_types");
    let discuss_meeting_dialog_fullTime_check = document.getElementById("discuss_meeting_dialog_fullTime_check");
    let discuss_meeting_dialog_partTime_check =document.getElementById("discuss_meeting_dialog_partTime_check");
    let discuss_meeting_dialog_contractedTime_check = document.getElementById("discuss_meeting_dialog_contractedTime_check");

    //dialog
    let discuss_meeting_dialog = document.getElementById("discuss_meeting_dialog");

    let text="";

    //create a new div
    let newElement = document.createElement("div");

    //set div attribute
    newElement.setAttribute("class","job_chosen")

    //if case of all selected items
    if (discuss_meeting_dialog_fullTime_check.checked == true){
        if(checked_job_types.hasChildNodes()){
            checked_job_types.removeChild(checked_job_types.lastChild);

            text = "Full Time";

            //new text node
            let jobSelected = document.createTextNode(text);

            //Append children
            newElement.appendChild(jobSelected);
            checked_job_types.appendChild(newElement);

            discuss_meeting_dialog.close();
        }else {

            text = "Full Time";

            //new text node
            let jobSelected = document.createTextNode(text);

            //Append children
            newElement.appendChild(jobSelected);
            checked_job_types.appendChild(newElement);

            discuss_meeting_dialog.close();
        }

    }else if(discuss_meeting_dialog_partTime_check.checked == true){
        if(checked_job_types.hasChildNodes()){
            checked_job_types.removeChild(checked_job_types.lastChild);

            text = "Part Time";

            //new text node
            let jobSelected = document.createTextNode(text);

            //Append children
            newElement.appendChild(jobSelected);
            checked_job_types.appendChild(newElement);

            discuss_meeting_dialog.close();
        }else {
            text = "Part Time";

            //new text node
            let jobSelected = document.createTextNode(text);

            //Append children
            newElement.appendChild(jobSelected);
            checked_job_types.appendChild(newElement);

            discuss_meeting_dialog.close();
        }

    }else if(discuss_meeting_dialog_contractedTime_check.checked == true){
        if(checked_job_types.hasChildNodes()){
            checked_job_types.removeChild(checked_job_types.lastChild);

            text = "Contracted"

            //new text node
            let jobSelected = document.createTextNode(text);

            //Append children
            newElement.appendChild(jobSelected);
            checked_job_types.appendChild(newElement);

            discuss_meeting_dialog.close();
        }else {
            text = "Contracted"

            //new text node
            let jobSelected = document.createTextNode(text);

            //Append children
            newElement.appendChild(jobSelected);
            checked_job_types.appendChild(newElement);

            discuss_meeting_dialog.close();
        }
    }

}