let radiologia = [
    {hora: '11:00', especialista: 'Ignacio Schulz', paciente: 'Francisca Rojas', rut: '9878782-1', prevision: 'Fonasa'},
    {hora: '11:30', especialista: 'Federico Subercaseaux', paciente: 'Pamela Estrada', rut: '15345241-3', prevision: 'Isapre'},
    {hora: '15:00', especialista: 'Fernando Wurthz', paciente: 'Armando Luna', rut: '16445345-9', prevision: 'Isapre'},
    {hora: '15:30', especialista: 'Ana Maria Godoy', paciente: 'Manuel Godoy', rut: '17666419-0', prevision: 'Fonasa'},
    {hora: '16:00', especialista: 'Patricia Suazo', paciente: 'Ramon Ulloa', rut: '14989389-K', prevision: 'Fonasa'},
];

let traumatologia = [
    {hora: '8:00', especialista: 'María Paz Altuzarra', paciente: 'Paula Sánchez', rut: '15554774-5', prevision: 'Fonasa'},
    {hora: '10:00', especialista: 'Raul Araya', paciente: 'Angélica Navas', rut: '15444147-9', prevision: 'Isapre'},
    {hora: '10:30', especialista: 'María Arriagada', paciente: 'Ana Klapp', rut: '17879423-9', prevision: 'Isapre'},
    {hora: '11:00', especialista: 'Alejandro Badilla', paciente: 'Felipe Mardones', rut: '1547423-6', prevision: 'Isapre'},
    {hora: '11:30', especialista: 'Cecilia Budnik', paciente: 'Diego Marre', rut: '16554741-K', prevision: 'Fonasa'},
    {hora: '12:00', especialista: 'Arturo Cavagnaro', paciente: 'Cecilia Mendez', rut: '9747535-8', prevision: 'Isapre'},
    {hora: '12:30', especialista: 'Andres Kanacri', paciente: 'Marcial Suazo', rut: '11254785-5', prevision: 'Isapre'},
]


let dental = [
    {hora: '8:30', especialista: 'Andrea Zuñiga', paciente: 'Marcela Retamal', rut: '11123425-6', prevision: 'Isapre'},
    {hora: '11:00', especialista: 'María Pia Zañartu', paciente: 'Angel Muñoz', rut: '9878789-2', prevision: 'Isapre'},
    {hora: '11:30', especialista: 'Scarlet Witting', paciente: 'Mario Kast', rut: '7998789-5', prevision: 'Fonasa'},
    {hora: '13:00', especialista: 'Francisco Von Teuber', paciente: 'Karin Fernandez', rut: '18887662-K', prevision: 'Fonasa'},
    {hora: '13:30', especialista: 'Eduardo Viñuela', paciente: 'Hugo Sánchez', rut: '17665461-4', prevision: 'Fonasa'},
    {hora: '14:00', especialista: 'Raquel Villaseca', paciente: 'Ana Sepulveda', rut: '14441281-0', prevision: 'Isapre'},
]

document.write('<p>Estadisticas Centro Medico Ñuñoa</p>');

document.write('<p>Cantidad de atenciones para Radiología: ', radiologia.length);
document.write('<p>Primera Atención: ', radiologia[0].paciente + ' - ' + radiologia[0].prevision + ' | ' + 'Última atención: ', radiologia[4].paciente + ' - ' + radiologia[4].prevision);

document.write('<p>Cantidad de atenciones para traumatología: ', traumatologia.length);
document.write('<p>Primera Atención: ', traumatologia[0].paciente + ' - ' + traumatologia[0].prevision + ' | ' + 'Útima atención: ', traumatologia[6].paciente + ' - ' + traumatologia[6].prevision);

document.write('<p>Cantidad de atenciones para Dental: ', dental.length);
sdocument.write('<p>Primera Atención: ', dental[0].paciente + ' - ' + dental[0].prevision + ' | ' + 'Última atención: ', dental[5].paciente + ' - ' + dental[5].prevision);