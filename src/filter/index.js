import Vue from "vue";

export default Vue.mixin({
    methods: {
        // confirm: function (callback) {
        //     Swal.fire({
        //         title: 'Are you sure?',
        //         text: "You won't be able to revert this!",
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Yes, delete it!'
        //     }).then((result) => {
        //         if (result.isConfirmed) callback();
        //     })
        // },
        loadImages: function(e){
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = e =>{
                this.form.feature_images = e.target.result;
            }
            reader.readAsDataURL(file);
        },
        fileLink: function (name) {
            if (name != null && name.length < 255)
                return 'uploads/images/products/' + name;
            else
                return this.form.feature_images;

        },
        statusName: function (status) {
            let data = {0: "Inactive", 1: "Active"}
            return data[status];
        },
        statusColor: function (status) {
            let data = {0: "bg-danger", 1: "bg-success"}
            return data[status];
        },

    }
});