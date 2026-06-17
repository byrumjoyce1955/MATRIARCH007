	@REM @Author: Eka Syahwan
@REM @Date:   2019 06:18:06
@REM @Last Modified by:   Injector & Wolf & Monsetor
@REM Modified time: 2019-09-2 04:25:37
@echo off
set PATH=%PATH%;C:\xampp\sendmail
title ( NODE )
:runsendinbox
node main.js
pause
cls
goto runsendinbox