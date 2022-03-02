<template>
  <div class="card">
    <div class="card-body">
      <div class="p-4 bg-primary text-white position-relative mb-4 d-flex flex-column align-items-center text-center">
        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
        <div class="mt-3">
          <h4 class="fs-16">{{GET_AUTH_INFO['name']}}</h4>
          <p class="text-secondary mb-1">{{GET_AUTH_INFO['email']}}</p>

        </div>
      </div>
      <ul class="aiz-side-nav-list px-2 metismenu mb-3" data-toggle="aiz-side-menu">

        <li class="aiz-side-nav-item">
          <router-link :to="{name:'dashboard'}" active-class="active" class="aiz-side-nav-link ">
            <i class="las la-home side-nav-icon"></i>
            <span class="aiz-side-nav-text">Dashboard</span>
          </router-link>
        </li>
        <li class="aiz-side-nav-item">
          <router-link :to="{name:'purchase'}" active-class="active" class="aiz-side-nav-link ">
            <i class="las la-file-alt side-nav-icon"></i>
            <span class="aiz-side-nav-text">Purchase History</span>
          </router-link>
        </li>



      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "UserSidebar",
  computed:{
    ...mapGetters(['GET_AUTH_INFO'])
  }
}
</script>

<style scoped>
.side-nav-link {
  color: #63666b;
  font-weight: 500;
  font-size: 0.8125rem;
  border-radius: 3px;
  padding: 10px 20px 10px 15px;
}
.side-nav-link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 10px 25px;
  font-size: 0.875rem;
  font-weight: 400;
  color: #a2a3b7;
}
.side-nav-link.active,
.side-nav-link:hover {
  background-color: var(--soft-primary);
}
.card .card-body {
  padding: 0;
  border-radius: 4px;
}
</style>