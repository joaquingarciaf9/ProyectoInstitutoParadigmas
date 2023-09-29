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
	add: #Intituto;
	add: #Seminario;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\Core\Object Arts\Dolphin\Base\Dolphin').

package!

"Class Definitions"!

Object subclass: #Alumno
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Curso
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Docente
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Intituto
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Curso subclass: #CursoIntensivo
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Curso subclass: #CursoLargo
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Curso subclass: #Seminario
	instanceVariableNames: ''
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
Curso guid: (GUID fromString: '{ef26b142-c710-41e3-b2c5-f52b6b456c00}')!
Curso comment: ''!
!Curso categoriesForClass!Kernel-Objects! !
Docente guid: (GUID fromString: '{d4bf1db2-6806-432b-b74a-2ca8f93f24d9}')!
Docente comment: ''!
!Docente categoriesForClass!Kernel-Objects! !
Intituto guid: (GUID fromString: '{e791ec9a-2625-42d6-8d03-64f233ad9ae9}')!
Intituto comment: ''!
!Intituto categoriesForClass!Kernel-Objects! !
!Intituto methodsFor!

cargaAlumno!

cargaCurso!

cargaDocente!

inicializa!

menu! !
!Intituto categoriesForMethods!
cargaAlumno!public! !
cargaCurso!public! !
cargaDocente!public! !
inicializa!public! !
menu!public! !
!

CursoIntensivo guid: (GUID fromString: '{df18ac4b-81ba-42fe-9389-9741bbdb89c3}')!
CursoIntensivo comment: ''!
!CursoIntensivo categoriesForClass!Kernel-Objects! !
CursoLargo guid: (GUID fromString: '{35c79ae1-6fdc-4d74-b599-0a0109e07629}')!
CursoLargo comment: ''!
!CursoLargo categoriesForClass!Kernel-Objects! !
Seminario guid: (GUID fromString: '{72232497-77e3-4b99-afd7-e4938dbb37c4}')!
Seminario comment: ''!
!Seminario categoriesForClass!Kernel-Objects! !
"Binary Globals"!

