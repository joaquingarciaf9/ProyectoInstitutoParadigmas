| package |
package := Package name: 'proyectInstituto'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #Alumno;
	add: #Curso;
	add: #CursoIntensivo;
	add: #CursoLargo;
	add: #Docente;
	add: #Instituto;
	add: #Seminario;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\..\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\..\Core\Object Arts\Dolphin\Base\Dolphin Message Box'
	'..\..\Core\Object Arts\Dolphin\MVP\Presenters\Prompters\Dolphin Prompter').

package!

"Class Definitions"!

Object subclass: #Alumno
	instanceVariableNames: 'nroInscripto dni nombre cursosInscripto cursosRealizados'
	classVariableNames: 'NroInsGenerado'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Curso
	instanceVariableNames: 'codigo nombre especialidad docente duracion cupo vacante'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Docente
	instanceVariableNames: 'legajo dni titulo nombre cargo'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Instituto
	instanceVariableNames: 'docentes alumnos cursos'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Curso subclass: #CursoIntensivo
	instanceVariableNames: 'precioxHora'
	classVariableNames: 'DuracionMax'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Curso subclass: #CursoLargo
	instanceVariableNames: ''
	classVariableNames: 'DuracionMax PrecioMensual'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Curso subclass: #Seminario
	instanceVariableNames: 'precio'
	classVariableNames: 'DuracionMax'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

Alumno guid: (GUID fromString: '{76aedf4c-45a7-4dbb-be6e-25d7be43bc39}')!
Alumno comment: ''!
!Alumno categoriesForClass!Kernel-Objects! !
!Alumno methodsFor!

cargaDatos
nombre:=(Prompter prompt: 'Ingrese el nombre: ')asString.
dni:=(Prompter prompt: 'Ingrese el DNI: ')asNumber.!

inscribirCurso!

setNroInscripto:unNro
nroInscripto:=unNro.! !
!Alumno categoriesForMethods!
cargaDatos!public! !
inscribirCurso!public! !
setNroInscripto:!public! !
!

!Alumno class methodsFor!

devNroInsGenerado
^NroInsGenerado+1
!

setNroInsGenerado:unNro
NroInsGenerado :=unNro.
! !
!Alumno class categoriesForMethods!
devNroInsGenerado!public! !
setNroInsGenerado:!public! !
!

Curso guid: (GUID fromString: '{ef26b142-c710-41e3-b2c5-f52b6b456c00}')!
Curso comment: ''!
!Curso categoriesForClass!Kernel-Objects! !
!Curso methodsFor!

actualizaVacante!

asignacionDocente!

cargaDatos: dura
codigo:=(Prompter prompt: 'Ingrese el codigo del curso' )asNumber asInteger.
nombre:=(Prompter prompt: 'Ingrese el nombre del curso: ' ) asString.
especialidad:=(Prompter prompt: 'Ingrese la especialdad del curso')asString.
duracion:=dura.
docente:=self asignacionDocente."realizar una funcion aparte para la asignacion del docente, verificando su existecia"
cupo:=(Prompter prompt: 'Ingrese el cupo de alumnos del curso:' )asNumber asInteger.
vacante:= self actualizaVacante ."Ver como calcular los lugares diponibles que hay para elc curso"


! !
!Curso categoriesForMethods!
actualizaVacante!public! !
asignacionDocente!public! !
cargaDatos:!public! !
!

Docente guid: (GUID fromString: '{d4bf1db2-6806-432b-b74a-2ca8f93f24d9}')!
Docente comment: ''!
!Docente categoriesForClass!Kernel-Objects! !
!Docente methodsFor!

cargaDatos
nombre:=(Prompter prompt: 'Ingrese el nommbre: ')asString.
dni:=(Prompter prompt: 'Ingrese el DNI: ')asNumber.
legajo."Podemos hacer lo mismo que con el codigo de los cursos, que sea automatico"
titulo:=(Prompter prompt: 'Ingrese que titulo posee: ')asString.
cargo:=(Prompter prompt: 'Ingrese que cargo posee: ')asString.! !
!Docente categoriesForMethods!
cargaDatos!public! !
!

Instituto guid: (GUID fromString: '{3b10b20d-c80e-439a-bb84-934c0dec5e58}')!
Instituto comment: ''!
!Instituto categoriesForClass!Unclassified! !
!Instituto methodsFor!

cargaAlumno
|alu|
alu :=Alumno new.
alu cargaDatos.
alu setNroInscripto: Alumno devNroInsGenerado.
alumnos add: alu.!

cargaCurso
|c duracion|
duracion:=(Prompter prompt: 'Ingrese la duracion del curso en horas: ' )asNumber asInteger.
(duracion <= CursoIntensivo getDuracionMax ) ifTrue: [
c:= CursoIntensivo new.
c cargaDatos: duracion .
].
(duracion > CursoIntensivo getDuracionMax & duracion <= Seminario getDuracionMax ) ifTrue: [
c:= Seminario new.
c cargaDatos: duracion .].
(duracion > Seminario getDuracionMax & duracion <= CursoLargo getDuracionMax )ifTrue: [
c:=CursoLargo new.
c cargaDatos: duracion .].
cursos add: c.!

cargaDocente
|docen|
docen :=Docente new.
docen cargaDatos.
docentes add: docen.
!

inicializa
alumnos := OrderedCollection new.
docentes := OrderedCollection new.
cursos := OrderedCollection new.
CursoLargo.PrecioMensual :=(Prompter prompt: 'Ingrese el valro mesual de los cursos largos: ')asNumber asInteger.
Alumno setNroInsGenerado:0.
CursoIntensivo setDuracionMax: 15.
Seminario setDuracionMax: 30.
CursoLargo setDuracionMax: 50.
CursoLargo setCargaPrecio: 20000.

!

menu
|op|
op:=8.
[op=0] whileFalse: [
	MessageBox notify: 'Menu:
1-Registrar a un docente.
2-Registrar un allumno.
3-Registrar un curso.
4-Inscribir un alumno a un curso.
5-Listados.
0-Salir.'.
op:=(Prompter prompt: 'Seleccione una de las opciones: ')asNumber asInteger.
[op>5 /op<0] whileTrue: [op:=(Prompter prompt: 'Opcion incorrecta, seleccione nuevamente: ')asNumber asInteger.].
(op=1)ifTrue: [self cargaDocente ] .
(op=2)ifTrue: [self cargaAlumno ].
(op=3)ifTrue: [self cargaCurso ].
(op=4)ifTrue: ["inscripcion de un alumno a un curso"].
(op=5)ifTrue: ["emision de listados"].
]! !
!Instituto categoriesForMethods!
cargaAlumno!public! !
cargaCurso!public! !
cargaDocente!public! !
inicializa!public! !
menu!public! !
!

CursoIntensivo guid: (GUID fromString: '{df18ac4b-81ba-42fe-9389-9741bbdb89c3}')!
CursoIntensivo comment: ''!
!CursoIntensivo categoriesForClass!Kernel-Objects! !
!CursoIntensivo methodsFor!

cargaDatos
precioxHora:=(Prompter prompt: 'Ingrese el precio por hora: ')asNumber asFloat.
!

cargaDatos: dura
precioxHora:=(Prompter prompt: 'Ingrese el precio por hora: ')asNumber asFloat.
super cargaDatos: dura.
! !
!CursoIntensivo categoriesForMethods!
cargaDatos!public! !
cargaDatos:!public! !
!

!CursoIntensivo class methodsFor!

getDuracionMax
^DuracionMax!

setDuracionMax: durMax
DuracionMax := durMax.
! !
!CursoIntensivo class categoriesForMethods!
getDuracionMax!public! !
setDuracionMax:!public! !
!

CursoLargo guid: (GUID fromString: '{35c79ae1-6fdc-4d74-b599-0a0109e07629}')!
CursoLargo comment: ''!
!CursoLargo categoriesForClass!Kernel-Objects! !
!CursoLargo class methodsFor!

getDuracionMax
^DuracionMax!

setCargaPrecio: pMensual
PrecioMensual:=pMensual.!

setDuracionMax: durMax
DuracionMax:=durMax.! !
!CursoLargo class categoriesForMethods!
getDuracionMax!public! !
setCargaPrecio:!public! !
setDuracionMax:!public! !
!

Seminario guid: (GUID fromString: '{72232497-77e3-4b99-afd7-e4938dbb37c4}')!
Seminario comment: ''!
!Seminario categoriesForClass!Kernel-Objects! !
!Seminario methodsFor!

cargaDatos
precio:=(Prompter prompt: 'Ingrese el precio del curso: ')asNumber asFloat.!

cargaDatos: dura
precio:=(Prompter prompt: 'Ingrese el precio del curso: ')asNumber asFloat.
super cargaDatos: dura.
! !
!Seminario categoriesForMethods!
cargaDatos!public! !
cargaDatos:!public! !
!

!Seminario class methodsFor!

getDuracionMax
^DuracionMax!

setDuracionMax:durMax
DuracionMax:=durMax.! !
!Seminario class categoriesForMethods!
getDuracionMax!public! !
setDuracionMax:!public! !
!

"Binary Globals"!

