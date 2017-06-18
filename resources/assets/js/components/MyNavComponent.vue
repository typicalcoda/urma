<template>

  <nav>
    <div class="strip">
      <ul>
        <li data-id="toggle-nav-size"><a><i class="fa"></i></a></li>

        <li @click="selectTab(1)" :class="{active : selectedTab === 1}"><router-link to="/"><i class="fa fa-home"></i></router-link></li>
        <li @click="selectTab(2)" :class="{active : selectedTab === 2}"><router-link to="/search"><i class="fa fa-search"></i></router-link></li>
        <li @click="selectTab(3)" :class="{active : selectedTab === 3}"><router-link to="/collections"><i class="fa fa-cube"></i></router-link></li>
        <li @click="selectTab(4)" :class="{active : selectedTab === 4}"><router-link to="/records"><i class="fa fa-cubes"></i></router-link></li>
        <li @click="selectTab(5)" :class="{active : selectedTab === 5}"><router-link to="/users"><i class="fa fa-users"></i></router-link></li>
        <li @click="selectTab(6)" :class="{active : selectedTab === 6}"><router-link to="/plugins"><i class="fa fa-download"></i></router-link></li>
        <li @click="selectTab(7)" :class="{active : selectedTab === 7}"><router-link to="/settings"><i class="fa fa-gear"></i></router-link></li>
        <li @click="selectTab(8)" :class="{active : selectedTab === 8}" class="pull-down"><router-link to="/support"><i class="fa fa-question-circle"></i></router-link></li>
      </ul>
    </div>

    <div class="tab-pages">
      <div v-for="tab in tabs" class="tab-page" v-show="selectedTab === tab.id">
        <div class="tab-title">{{tab.title}}</div>
        <p class="tab-blurb">{{tab.blurb}}</p>
        <div class="tab-content">
          {{tab.content}}
        </div>
      </div>
    </div>
  </nav>

</template>

<script>

  export default {
    data(){
      return{
        selectedTab : 1,
        tabs : [
        {id: 1, title : 'Dashboard', blurb: 'Where you view your fundamental tools', content: '...'},
        {id: 2, title : 'Search', blurb: 'Search for anything in your app!', content: 'Search Results:'},
        {id: 3, title : 'Collections', blurb: 'Manage your collections', content: 'Maybe a quick list or something here'},
        {id: 4, title : 'Records', blurb: 'Manage your records', content: 'Again, some summary or something'},
        {id: 5, title : 'Users', blurb: 'Manager users and set permissions', content: 'List of users'},
        {id: 6, title : 'Plugins', blurb: 'Add more magic to your app!', content: 'Maybe a list of installed/popular plugins'},
        {id: 7, title : 'Settings', blurb: 'Customise your experience', content: 'A list of recently changed/preferred quick-view settings here'},
        {id: 8, title : 'Support', blurb: 'Need assistence? Get in touch!', content: 'Number, email, maybe a ticket form...'},
        ]
      }
    },
    methods: {
      selectTab : function(tab){
        this.selectedTab = tab;
      }
    },
    mounted() {

    }
  }
</script>


<style lang="scss" scoped>

  $nav-width: 400px;

  nav{
    background: #2b2b2b;
    height: 100%;
    position:fixed;
    float:left;
    .strip{
      float: left;
      display:inline-block;
      background: #1a1a1a;
      height: 100%;
      width: 60px;
      ul{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        position:relative;
        li{
          height: 60px;
          list-style-type:none;
          transition:.2s ease-in-out;
          &:hover{
            cursor:pointer;
            background:#1f1f1f
          }
          &:first-of-type{
            margin-bottom:32px;
            a {
              i{
                &:before{
                  content: "\f104";
                  color:#fff;
                }
              }
            }
            &:hover{
              background:#171717;
            }

          }
          a{
            display: block;
            height: 100%;
            line-height: 3.5em;
            text-align: center;
            color: #d8d8d8;
          }
          &.pull-down{
            position:absolute;
            width:100%;
            bottom:0;
          }
          &.active{
            background:#2b2b2b;
          }
        }
      }
    }
    .tab-pages{
      transition:.3s;
      display:none;
      display:inline-block;
      width:340px;
      height:100%;
      color: #6b6b6b;
      .tab-page{
        .tab-title{
          padding: 20px;
          margin-top: 25px;
          font-size: 17px;
          font-weight: 300;
          color: #a2a2a2;
        }
        .tab-blurb{
          padding: 20px;
          font-size: 13px;
          padding-bottom: 25px;
          &:after{
            content: " ";
            display: block;
            border-bottom: 1px solid #353535;
            padding-top: 25px;
            margin: 0 15px;
          }
        }
        .tab-content{
          padding: 20px;
        }
      }
    }
  }

</style>