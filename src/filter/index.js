import Vue from "vue";
import moment from 'moment';

export default Vue.mixin({
    methods: {
        confirm: function (callback) {
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) callback();
            })
        },
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
        orderStatus: function (status) {
            let data = {0: "Pending", 1: "Processing", 2: "Placed", 3: "Shipped", 4: "Delivered"}
            return data[status];
        },
        statusColor: function (status) {
            let data = {0: "bg-danger", 1: "bg-success"}
            return data[status];
        },
        Loader: function (){
            setTimeout(() => {
                this.loadingStatus = false
            }, 500)
        }
    },

});

// Date Format
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MMMM DD, YYYY')
    }
});