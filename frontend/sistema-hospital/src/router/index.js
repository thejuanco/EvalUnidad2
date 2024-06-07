import { createRouter, createWebHistory } from 'vue-router'
import RegisterUser from '@/components/registerUser.vue'
import LoginView from '@/components/login.vue'
import DashboardView from '@/components/dashboard.vue'
import PersonasView from '@/components/personas.vue'
import UsuarioView from '@/components/usuario.vue'
import ResultadosEstudioView from '@/components/resultadosEstudio.vue'
import Estudio from '@/components/estudio.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
     {
      path: '/estudio',
      name: 'estudio',
      component: Estudio
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children:[{
        path: '/personas',
        name: 'personas',
        component: PersonasView 
      },
      {
        path: '/usuario',
        name: 'usuario',
        component: UsuarioView 
      },
      {
        path: '/resultadosEstudio',
        name: 'resultadosEstudio',
        component: ResultadosEstudioView 
      }]
    }
  
   
    
  ]
})

export default router
