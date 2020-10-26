const app = Vue.createApp({
    data: () => ({
        // Encabezado
        titulo: 'Paradigmas de programacion - Vue',
        instrucciones: [
            'Consumir la api: https://jsonplaceholder.typicode.com/users',
            'Mostrar el nombre del usuario y el nombre de la compania',
            'Compartir link del repositorio github'
        ],
        alumno: 'Bernardo Alfonso Borunda Jaquez',
        matricula: '314788',
        // Aplicacion
        users: []
    }),
    created() {
        this.cargarUsuarios()
    },
    methods: {
        cargarUsuarios() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(datos => {
                    this.users = datos
                })
        }
    }
});

const vm = app.mount('#app');