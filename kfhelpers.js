const kfhelpers = {
    "dataform": function (form_id) {
        return new DataForm(form_id)
    },
    "process": function (process_id) {
        return new Process(process_id)
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

function Process(process_id) {
    const me = this;
    this.account_id = kf.account._id;
    this.application_id = kf.app._id;
    this.process_id = process_id;
    this.create_instance = async function (data) {
        return kf.api("/process/2/" + me.account_id + "/" + me.process_id + "?_application_id=" + me.application_id,{"body":JSON.stringify(data),"method": "POST",});
    };
}