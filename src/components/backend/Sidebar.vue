<template>
  <div class="sidebar sidebar-dark sidebar-fixed" :class="{ hide: sidebarClick }" id="sidebar">
    <div class="sidebar-brand d-none d-md-flex">
      <img src="../../assets/media/logo-light.png" width="80px">
    </div>
    <ul class="sidebar-nav" data-coreui="navigation" data-simplebar>
      <li class="nav-item"><router-link active-class="active" class="nav-link" :to="{name:'admin-dashboard'}">
        <div class="nav-icon"><i class="cil-home"></i></div>
        Dashboard</router-link>
      </li>
      <li class="nav-title">Menu</li>
      <li class="nav-item"><router-link :to="{name:'admin-category'}" active-class="active" class="nav-link">
        <div class="nav-icon"><i class="cil-library-add"></i></div>Category</router-link>
      </li>
      <li class="nav-item"><router-link :to="{name:'subcategory'}" active-class="active" class="nav-link">
        <div class="nav-icon"><i class="cil-library-add"></i></div>Sub Category</router-link>
      </li>
      <li class="nav-item"><router-link :to="{name:'brands'}" active-class="active" class="nav-link">
        <div class="nav-icon"><i class="cil-library-add"></i></div>Brands</router-link>
      </li>
      <li class="nav-item"><router-link :to="{name:'products'}" active-class="active" class="nav-link">
        <div class="nav-icon"><i class="cil-cart"></i></div>Products</router-link>
      </li>
      <li class="nav-item"><a class="nav-link" href="typography.html">
        <div class="nav-icon">
          <i class="cil-home"></i>
        </div> Typography</a></li>
      <li class="nav-title">Components</li>
      <li class="nav-group"><a class="nav-link nav-group-toggle" href="#">
        <div class="nav-icon">
          <i class="cil-home"></i>
        </div> Base</a>
        <ul class="nav-group-items">
          <li class="nav-item"><a class="nav-link" href="base/accordion.html"><span class="nav-icon"></span> Accordion</a></li>
          <li class="nav-item"><a class="nav-link" href="base/breadcrumb.html"><span class="nav-icon"></span> Breadcrumb</a></li>
          <li class="nav-item"><a class="nav-link" href="base/cards.html"><span class="nav-icon"></span> Cards</a></li>
          <li class="nav-item"><a class="nav-link" href="base/carousel.html"><span class="nav-icon"></span> Carousel</a></li>
          <li class="nav-item"><a class="nav-link" href="base/collapse.html"><span class="nav-icon"></span> Collapse</a></li>
          <li class="nav-item"><a class="nav-link" href="base/list-group.html"><span class="nav-icon"></span> List group</a></li>
          <li class="nav-item"><a class="nav-link" href="base/navs.html"><span class="nav-icon"></span> Navs</a></li>
          <li class="nav-item"><a class="nav-link" href="base/pagination.html"><span class="nav-icon"></span> Pagination</a></li>
          <li class="nav-item"><a class="nav-link" href="base/placeholders.html"><span class="nav-icon"></span> Placeholders</a></li>
          <li class="nav-item"><a class="nav-link" href="base/popovers.html"><span class="nav-icon"></span> Popovers</a></li>
          <li class="nav-item"><a class="nav-link" href="base/progress.html"><span class="nav-icon"></span> Progress</a></li>
          <li class="nav-item"><a class="nav-link" href="base/scrollspy.html"><span class="nav-icon"></span> Scrollspy</a></li>
          <li class="nav-item"><a class="nav-link" href="base/spinners.html"><span class="nav-icon"></span> Spinners</a></li>
          <li class="nav-item"><a class="nav-link" href="base/tables.html"><span class="nav-icon"></span> Tables</a></li>
          <li class="nav-item"><a class="nav-link" href="base/tabs.html"><span class="nav-icon"></span> Tabs</a></li>
          <li class="nav-item"><a class="nav-link" href="base/tooltips.html"><span class="nav-icon"></span> Tooltips</a></li>
        </ul>
      </li>
      <li class="nav-group"><a class="nav-link nav-group-toggle" href="#">
        <div class="nav-icon">
          <i class="cil-home"></i>
        </div> Buttons</a>
        <ul class="nav-group-items">
          <li class="nav-item"><a class="nav-link" href="buttons/buttons.html"><span class="nav-icon"></span> Buttons</a></li>
          <li class="nav-item"><a class="nav-link" href="buttons/button-group.html"><span class="nav-icon"></span> Buttons Group</a></li>
          <li class="nav-item"><a class="nav-link" href="buttons/dropdowns.html"><span class="nav-icon"></span> Dropdowns</a></li>
        </ul>
      </li>
      <li class="nav-item"><router-link class="nav-link" :to="{name:'logout'}">
        <div class="nav-icon"><i class="cil-home"></i></div>
        Logout</router-link>
      </li>
    </ul>
    <button class="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return{
      sidebarClick: false
    }
  },
  props: [
    'source',
    'title'
  ],
  methods:{
    myFilter: function() {
      this.isActive = true
    }
  }
}
</script>

<style scoped>
</style>