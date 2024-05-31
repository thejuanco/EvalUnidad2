
import router from '@/router';
<template>
<div class="py-16">
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
				<!-- Col -->
				<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
					style="background-image: url('https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*')"></div>
				<!-- Col -->
				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">PRIVILAGE CARE HOSPITAL</h3>
					<form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                    Nombre
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                />
							</div>
							<div class="md:ml-2">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                    Apellido
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />
							</div>
						</div>
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                Email
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
						</div>
						<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                    Contraseña
                                </label>
								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								<p class="text-xs italic text-red-500">Elige una Contraseña</p>
							</div>
							<div class="md:ml-2">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                    Confirma tu Contraseña
                                </label>
								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    placeholder="******************"
                                />
							</div>
						</div>
						<div class="mb-6 text-center">
							<button
                                class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                type="button"
                            >
                                Registrar Cuenta
                            </button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="#">
								¿Olvidaste tu Contraseña?
							</a>
						</div>
						<div class="text-center">
                            <RouterLink to="/">                
							<a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="">
								¿Ya Tienes una Cuenta? ¡Inicia Sesión!
							</a>
                            </routerLink>
						</div>
					</form>
				</div>
			</div>
		</div>

</template>