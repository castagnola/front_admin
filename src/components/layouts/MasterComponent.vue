<template>
    <div id="master-layout">
        <!--        <BootstrapSideBar :sidenavConfig="sidenavConfig" :header="header" :hasNavbar="hasNavbar" :links="sidelinks"-->
        <!--                          :navs="headerLinks">-->
        <!--            <router-view/>-->
        <!--        </BootstrapSideBar>-->
        <BootstrapSideBar :sidenavConfig="sidenavConfig" :header="header" :hasNavbar="hasNavbar" :links="sidelinks" :navs="headerLinks">
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
                    sidenavMainColor: 'bg-dark',
                    sidenavBgColor: 'navbar-dark',
                    navbarClass: 'custom-one',
                    sidenavClass: 'sidenav-custom-class'
                },
                header: {
                    title: 'App Admin',
                    href: 'home'
                },
                hasNavbar: true,
                headerLinks: [
                    {
                        label:'Label', href:'#',navs:[
                            {label:'About',href:"/about"},
                            {label:'About 2',href:"#"}
                        ]
                    }
                ],
                sidelinks: [
                    {label:'Ejemplo',href:"#",icon:'fa-bell-o',links:[
                            {label:'About',href:'#'}
                        ]}
                ]

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
