<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        name: 'Logout',
        created() {
            this.$store.dispatch("Logout").then(() => {
            this.$router.push({name: 'login'})
            })
        }
        // methods: {
        //     adminLogout(){
        //         this.$store.dispatch("LOGOUT")
        //         .then((res) =>{
        //             console.log(res.data)
        //             this.$router.push({name: 'login'})
        //         }).catch((err) =>{
        //             console.log(err.response.data.errors)
        //         })
        //     }
        // },
    }
</script>

<style lang="scss" scoped>

</style>