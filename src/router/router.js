import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

// import AboutPage from "@/modules/pokemon/pages/AboutPage";
// import ListPage from "@/modules/pokemon/pages/ListPage";
// import PokemonPage from "@/modules/pokemon/pages/PokemonPage";

// import NoPagefound from "@/shared/pages/NoPageFound";



const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: ()  => import( /* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: ()  => import( /* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage') 
            },
            { 
                path: 'about', 
                name: 'pokemon-about',
                component: ()  => import( /* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')// con lo de comentar es para agregarle un nombre a la carga peressa que se realiza, es opcional
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: ()  => import( /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const  id  =  Number( route.params.id )
                    return isNaN( id ) ? { id: 1 }: { id }
                    // return {
                    //     id: Number(id),
                    //     // name: 'William',
                    //     // lastName: 'Herrera'
                    // }
                }
            },
            {
                path: '',
                redirect: { name:'pokemon-about' }
            },
        ]
    },
    // DBZ Layout
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [ isAuthenticatedGuard ],
        component: ()  => import( /* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            { 
                path: 'characters', 
                name: 'dbz-characters',
                // beforeEnter: [ isAuthenticatedGuard ],
                component: ()  => import( /* webpackChunkName: "dbz-characters" */ '@/modules/dbz/pages/Characters')// con lo de comentar es para agregarle un nombre a la carga peressa que se realiza, es opcional
            },
            { 
                path: 'about', 
                name: 'dbz-about',
                component: ()  => import( /* webpackChunkName: "dbz-about" */ '@/modules/dbz/pages/About')// con lo de comentar es para agregarle un nombre a la carga peressa que se realiza, es opcional
            },
            {
                path: '',
                redirect: { name:'dbz-characters' }
            },
        ]
    },

    //
    { 
        path: '/:pathMatch(.*)*', 
        component: ()  => import( /* webpackChunkName: "NoPagefound" */ '@/modules/shared/pages/NoPageFound'),
        // redirect: '/home'
    },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})  


// Guard Global -sincrono
// router.beforeEach( ( to, from, next) => { 
//      console.log({ to, from, next });

//      const random = Math.random() * 100

//      if ( random > 50 ) {
//          console.log('Autentificado');
//          next()
//      } else {
//          console.log( random, 'bloqueado por beforeEach Guard');
//          next( { name: 'pokemon-home'})
//      }
//     //  console.log(random);
//      //next();// sin esto no avanza la ruta
// })


// asyncrono
// const canAccess = () =>{
//     return new Promise( resolve => {
//         const random = Math.random() * 100

//         if ( random > 50 ) {
//             console.log('Autenticado - canAccess');
//             resolve(true)
//         } else {
//             console.log( random, 'bloqueado por beforeEach Guard - canAccess');
//             resolve(false)
//         }
//     })
// }

// router.beforeEach( async ( to, from, next) => { 
//     const authorized = await canAccess()
//     authorized ? next() :  next( { name: 'pokemon-home'})
// })



export default router