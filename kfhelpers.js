const kfhelpers = {
    "dataform": function (form_id) {
        return new DataForm(form_id)
    }
}

function DataForm(form_id) {
    const me = this;
    this.account_id = kf.account._id;
    this.application_id = kf.app._id;
    this.form_id = form_id;
    this.get_instance = async function (instance_id) {
        return kf.api("/form/2/" + me.account_id + "/" + me.form_id + "/" + instance_id + "?_application_id=" + me.application_id);
    };
}