| package |
package := Package name: 'TP_POO_InstitutoSABER+'.
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
	'..\..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin Message Box'
	'..\..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Prompters\Dolphin Prompter').

package!

"Class Definitions"!

Object subclass: #Alumno
	instanceVariableNames: 'nroInscripto dni nombre cursosInscripto'
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
	classVariableNames: 'LegGenerado'
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
nroInscripto := Alumno devNroInsGenerado.
Alumno actualizaNroIns.
nombre:=(Prompter prompt: 'Ingrese el nombre del alumno: ')asString.
dni:=(Prompter prompt: 'Ingrese el DNI del alumno: ')asNumber.
cursosInscripto := OrderedCollection new.!

cursosInscripto: anObject
	cursosInscripto add: anObject.!

nroInscripto
	^nroInscripto! !
!Alumno categoriesForMethods!
cargaDatos!public! !
cursosInscripto:!accessing!private! !
nroInscripto!accessing!private! !
!

!Alumno class methodsFor!

actualizaNroIns
NroInsGenerado:= NroInsGenerado+1.!

devNroInsGenerado
^NroInsGenerado+1
!

setNroInsGenerado:unNro
NroInsGenerado :=unNro.
! !
!Alumno class categoriesForMethods!
actualizaNroIns!public! !
devNroInsGenerado!public! !
setNroInsGenerado:!public! !
!

Curso guid: (GUID fromString: '{ef26b142-c710-41e3-b2c5-f52b6b456c00}')!
Curso comment: ''!
!Curso categoriesForClass!Kernel-Objects! !
!Curso methodsFor!

actualizaVacante
vacante:= vacante - 1.!

cargaDatos: dura
codigo:=(Prompter prompt: 'Ingrese el codigo del curso: ')asNumber asInteger.
nombre:=(Prompter prompt: 'Ingrese el nombre del curso: ' ) asString.
especialidad:=(Prompter prompt: 'Ingrese la especialdad del curso: ')asString.
duracion:=dura.
cupo:=(Prompter prompt: 'Ingrese el cupo de alumnos del curso: ' )asNumber asInteger.
vacante:= cupo.

!

codigo
	^codigo!

cupo
	^cupo!

docente: anObject
	docente := anObject!

nombre
	^nombre!

vacante
	^vacante! !
!Curso categoriesForMethods!
actualizaVacante!public! !
cargaDatos:!public! !
codigo!accessing!private! !
cupo!accessing!private! !
docente:!accessing!private! !
nombre!accessing!private! !
vacante!accessing!private! !
!

Docente guid: (GUID fromString: '{d4bf1db2-6806-432b-b74a-2ca8f93f24d9}')!
Docente comment: ''!
!Docente categoriesForClass!Kernel-Objects! !
!Docente methodsFor!

cargaDatos
legajo:= Docente devLegGenerado.
Docente actualizaLegajo.
nombre:=(Prompter prompt: 'Ingrese el nombre del docente: ')asString.
dni:=(Prompter prompt: 'Ingrese el DNI del docente: ')asNumber asInteger.
titulo:=(Prompter prompt: 'Ingrese que titulo posee el docente: ')asString.
cargo:=(Prompter prompt: 'Ingrese que cargo posee el docente: ')asString.!

dni
	^dni! !
!Docente categoriesForMethods!
cargaDatos!public! !
dni!accessing!private! !
!

!Docente class methodsFor!

actualizaLegajo
LegGenerado:= LegGenerado+1.!

devLegGenerado
^LegGenerado+1!

setLegGenerado: unLeg
LegGenerado:=unLeg.! !
!Docente class categoriesForMethods!
actualizaLegajo!public! !
devLegGenerado!public! !
setLegGenerado:!public! !
!

Instituto guid: (GUID fromString: '{3b10b20d-c80e-439a-bb84-934c0dec5e58}')!
Instituto comment: ''!
!Instituto categoriesForClass!Unclassified! !
!Instituto methodsFor!

asignacionDocente
|doc dni|
dni :=(Prompter  prompt: 'Ingrese el DNI del docente que desea asignar: ' )asNumber asInteger.
doc := docentes detect: [:unDocente | unDocente dni = dni ] ifNone: [nil].
[doc = nil]whileTrue: [
dni :=(Prompter  prompt: 'El DNI ingresado no existe, vuelva a ingresarlo: ' )asNumber asInteger.
doc := docentes detect: [:unDocente | unDocente dni = dni ] ifNone: [nil].
].
^doc
!

cargaAlumno
|alu|
alu :=Alumno new.
alu cargaDatos.
alumnos add: alu.!

cargaCurso
|c duracion|
duracion:=(Prompter prompt: 'Ingrese la duracion del curso en horas: ' )asNumber asInteger.
(duracion <= Seminario getDuracionMax ) ifTrue: [
c:= Seminario new.
c cargaDatos: duracion .]."Creo un nuevo seminario"

((duracion > Seminario getDuracionMax) & (duracion <= CursoIntensivo getDuracionMax )) ifTrue: [
c:= CursoIntensivo new.
c cargaDatos: duracion .]."Creo un nuevo curso intensivo"

((duracion > CursoIntensivo getDuracionMax) & (duracion <= CursoLargo getDuracionMax ))ifTrue: [
c:=CursoLargo new.
c cargaDatos: duracion .]."Creo un nuevo curso largo"

((docentes)isEmpty )ifTrue: [
MessageBox notify: 'No hay ningun docente ingresado en el sistema.' caption: 'ALERTA: No se pudo completar la carga.' ] ifFalse: [
c docente: self asignacionDocente.
cursos add: c.].!

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
CursoLargo.PrecioMensual :=20000.
Alumno setNroInsGenerado:0.
Docente setLegGenerado: 0.
Seminario setDuracionMax: 20.
CursoIntensivo setDuracionMax: 250.
CursoLargo setDuracionMax: 500.
CursoLargo setCargaPrecio: 20000.

!

inscribirAlumno
|cur cod alu nroI|
nroI :=(Prompter  prompt: 'Ingrese el numero de inscripcion del alumno a asignar: ' )asNumber asInteger.
alu := alumnos detect: [:unAlumno | unAlumno nroInscripto = nroI ] ifNone: [nil].
[alu = nil]whileTrue: [
nroI :=(Prompter  prompt: 'El numero de inscripto no existe, vuelva a ingresar: ' )asNumber asInteger.
alu := alumnos detect: [:unAlumno | unAlumno nroInscripto = nroI ] ifNone: [nil].
].
cod :=(Prompter  prompt: 'Ingrese el codigo del curso al cual quiere inscribir al alumno: ' )asNumber asInteger.
cur := cursos detect: [:unCurso | unCurso codigo = cod ] ifNone: [nil].
[cur = nil]whileTrue: [
cod :=(Prompter  prompt: 'El codigo del curso no existe, vuelva a ingresarlo: ' )asNumber asInteger.
cur := cursos detect: [:unCurso | unCurso codigo = cod ] ifNone: [nil].
].
(cur vacante  = 0) ifFalse: [
alu cursosInscripto: cur.
cur actualizaVacante.] ifTrue: [
"No quedan mas vacantes libres en el curso elegido."].


!

listadoVacante
|cantCursos|
"Hacer un listado que muestre las vacantes de los cursos"
((cursos )isEmpty ) ifTrue: [
MessageBox notify: 'No se ha ingresado ningun curso hasta el momento.' caption: 'Alerta'] ifFalse: [
cantCursos := (cursos)size.
Transcript clear ; show: 'Listado de las vacantes de cada curso: '.
Transcript cr;cr.
Transcript show: 'Cursos totales: '; show: cantCursos printString.
Transcript cr.
Transcript show: 'Codigos'; tab; tab; show: 'Nombres'; tab ; tab ; show: 'Vacantes'.
Transcript cr.
cursos do: [:each | Transcript show: each codigo printString ; tab; tab; show: each nombre ; tab ; tab. 
(each vacante = 0)ifTrue: [Transcript show: 'No quedan vacantes disponibles'] ifFalse: [Transcript  show: each vacante printString ].
Transcript cr. ]. 
].!

menu
|op|
op:=8.
[op=0] whileFalse: [
	MessageBox notify: 'Menu:
1-Registrar a un docente.
2-Registrar un alumno.
3-Registrar un curso.
4-Inscribir un alumno a un curso.
5-Listado de las vacantes de los cursos.
0-Salir.'.
op:=(Prompter prompt: 'Seleccione una de las opciones: ')asNumber asInteger.
[(op>5) | (op<0)] whileTrue: [op:=(Prompter prompt: 'Opcion incorrecta, seleccione nuevamente: ')asNumber asInteger.].
(op=1)ifTrue: [self cargaDocente ] .
(op=2)ifTrue: [self cargaAlumno ].
(op=3)ifTrue: [self cargaCurso ].
(op=4)ifTrue: [self inscribirAlumno].
(op=5)ifTrue: [self listadoVacante].
].! !
!Instituto categoriesForMethods!
asignacionDocente!public! !
cargaAlumno!public! !
cargaCurso!public! !
cargaDocente!public! !
inicializa!public! !
inscribirAlumno!public! !
listadoVacante!public! !
menu!public! !
!

CursoIntensivo guid: (GUID fromString: '{df18ac4b-81ba-42fe-9389-9741bbdb89c3}')!
CursoIntensivo comment: ''!
!CursoIntensivo categoriesForClass!Kernel-Objects! !
!CursoIntensivo methodsFor!

cargaDatos: dura
precioxHora:=(Prompter prompt: 'Ingrese el precio por hora del curso intensivo: ')asNumber asFloat.
super cargaDatos: dura.
! !
!CursoIntensivo categoriesForMethods!
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

cargaDatos: dura
precio:=(Prompter prompt: 'Ingrese el precio del seminario: ')asNumber asFloat.
super cargaDatos: dura.
! !
!Seminario categoriesForMethods!
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

