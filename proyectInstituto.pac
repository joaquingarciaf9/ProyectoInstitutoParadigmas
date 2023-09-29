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
	'..\..\Core\Object Arts\Dolphin\Base\Dolphin').

package!

"Class Definitions"!

Object subclass: #Alumno
	instanceVariableNames: 'nroInscripto dni nombre cursosInscripto cursosRealizados'
	classVariableNames: 'UltimoNroIns'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Curso
	instanceVariableNames: 'codigo nombre especialidad docente duracion cupo vancante'
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
	instanceVariableNames: 'cantidadHoras precioxHora'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Curso subclass: #CursoLargo
	instanceVariableNames: ''
	classVariableNames: 'PrecioMensual'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Curso subclass: #Seminario
	instanceVariableNames: 'precio'
	classVariableNames: ''
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

cargaDatos!

inscribirCurso! !
!Alumno categoriesForMethods!
cargaDatos!public! !
inscribirCurso!public! !
!

Curso guid: (GUID fromString: '{ef26b142-c710-41e3-b2c5-f52b6b456c00}')!
Curso comment: ''!
!Curso categoriesForClass!Kernel-Objects! !
!Curso methodsFor!

actualizaVacante!

cargaDatos! !
!Curso categoriesForMethods!
actualizaVacante!public! !
cargaDatos!public! !
!

Docente guid: (GUID fromString: '{d4bf1db2-6806-432b-b74a-2ca8f93f24d9}')!
Docente comment: ''!
!Docente categoriesForClass!Kernel-Objects! !
!Docente methodsFor!

cargaDatos! !
!Docente categoriesForMethods!
cargaDatos!public! !
!

Instituto guid: (GUID fromString: '{3b10b20d-c80e-439a-bb84-934c0dec5e58}')!
Instituto comment: ''!
!Instituto categoriesForClass!Unclassified! !
!Instituto methodsFor!

cargaAlumno!

cargaCurso!

cargaDocente!

inicializa!

menu! !
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

cargaDatos! !
!CursoIntensivo categoriesForMethods!
cargaDatos!public! !
!

CursoLargo guid: (GUID fromString: '{35c79ae1-6fdc-4d74-b599-0a0109e07629}')!
CursoLargo comment: ''!
!CursoLargo categoriesForClass!Kernel-Objects! !
!CursoLargo class methodsFor!

cargaPrecio! !
!CursoLargo class categoriesForMethods!
cargaPrecio!public! !
!

Seminario guid: (GUID fromString: '{72232497-77e3-4b99-afd7-e4938dbb37c4}')!
Seminario comment: ''!
!Seminario categoriesForClass!Kernel-Objects! !
!Seminario methodsFor!

cargaDatos!

cargaPrecio! !
!Seminario categoriesForMethods!
cargaDatos!public! !
cargaPrecio!public! !
!

"Binary Globals"!

