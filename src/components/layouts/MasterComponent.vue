<template>
    <div id="master-layout">
        <BootstrapSideBar :sidenavConfig="sidenavConfig" :header="header" :hasNavbar="hasNavbar" :links="sidelinks"
                          :navs="headerLinks">
            <router-view/>
        </BootstrapSideBar>

    </div>

</template>

<script>
    import BootstrapSideBar from 'b-sidebar';

    export default {
        name: "MasterComponent",
        components: {
            BootstrapSideBar
        },
        data() {
            return {
                sidenavConfig: {
                    sidenavMainColor: 'bg-primary',
                    sidenavBgColor: 'navbar-dark',
                    navbarClass: 'custom-one',
                    sidenavClass: 'sidenav-custom-class'
                },
                header: {
                    title:'Admin Panel',
                    href:'home'
                },
                hasNavbar: true,
                // headerLinks: {
                //     label:'Ejemplo',href:'#',links:[
                //         {
                //             label:'About',href:"/about"
                //         }
                //     ]
                // },
                // sidelinks: {
                //
                //     label:'Ejemplo',href:'#',navs:[
                //         {
                //             label:'About',href:"/about"
                //         }
                //     ]
                // },

            }
        }
    }
</script>

<style scoped>
    #master-layout {
        font-family: 'Avenir';
        -webkit-font-smoothing: antialiased;
        text-align: center;
        color: black;
    }

    #nav {
        padding: 30px;
    }
</style>
