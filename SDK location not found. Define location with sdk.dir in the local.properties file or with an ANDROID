#BUG:  SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID

#SOLUTION: 

++++++++++++++++MACOSX+++++++++++++++++++

I found two ways to solve:


**************(1st way,Good practice and recommend)**************

(1) Open with eny editor

~/.bash_profile

(2) add this on file

 export ANDROID_HOME=~/Library/Android/sdk/
 export PATH=$PATH:~/android-sdks/platform-tools/
 export PATH=$PATH:~/android-sdks/tools/

(3) Run it on terminal

source ~/.bash_profile

(4) Restartar the Terminal

DONE.


**************(2nd way, if the first form does not work)**********


(1) Create a named file  "local.properties" in your app's android folder 

(2) Add this line

sdk.dir = /Users/imac/Library/Android/sdk

(3) Save the File

(4) Restartar the Terminal

DONE.

