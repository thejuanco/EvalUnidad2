import router from '@/router';
<template>
<div class="py-16">
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
				<!-- Col -->
				<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
					style="background-image: url('https://i.pinimg.com/originals/ec/0e/69/ec0e690e32f7c84e714886136a2f6469.jpg')"></div>
				<!-- Col -->
				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">PRIVILAGE CARE HOSPITAL</h3>
					<form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						<div class="mb-4 md:flex md:justify-between">
							<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="nombre">
                                    Nombre
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="nombre"
                                />
							</div>
							<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="primerApellido">
                                    Primer Apellido
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="primerApellido"
                                    type="text"
                                    placeholder="Primer Apellido"
                                />
							</div>
								<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="segundoApellido">
                                   Segundo Apellido
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="segundoApellido"
                                    type="text"
                                    placeholder="Segundo Apellido"
                                />
							</div>
						</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="CURP">
                                   CURP
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="CURP"
                                    type="text"
                                    placeholder="CURP"
                                />
							</div>
								<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="genero">
                                   Genero
                                </label>
								<select id="genero" 
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                >
								    <option selected>Genero</option>
									<option value="H">Hombre</option>
									<option value="M">Mujer</option>
									<option value="O">Otro</option>
								</select>
								</div>
								<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="sangre">
                                   Sangre
                                </label>
								<select id="sangre" 
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                >
								    <option selected>Tipo</option> 
									<option value="A1">A+</option>
									<option value="A2">A-</option>
									<option value="B1">B+</option>
									<option value="B2">B-</option>
									<option value="AB1">AB+</option>
									<option value="AB2">AB-</option>
									<option value="O1">O+</option>
									<option value="O2">O-</option>
								</select>
								</div>
								</div>


               <div class="mb-4 md:flex md:justify-between">
							<div class="mt-4">
            <label for="fechaNacimiento" class="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Fecha de Nacimiento</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="fechaNacimiento" name="fechaNacimiento" type="date" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>
							<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="telefono">
                                    Telefono
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="telefono"
                                    type="telephone"
                                    placeholder="Telefono"
                                />
							</div>
							<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                    Email
                                </label>
								<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"/>
						</div>
						</div>

						<div class="mb-4 md:flex md:justify-between">
													<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="usuario">
                                    Usuario
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="usuario"
                                    type="text"
                                    placeholder="Usuario"
                                />
							</div>
							<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                    Contraseña
                                </label>
								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******"
                                />
							</div>
							<div class="mt-4">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="repetirPassword">
                                    Confirmar
                                </label>
								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="repetirPassword"
                                    type="password"
                                    placeholder="******"
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