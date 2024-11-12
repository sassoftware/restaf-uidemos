#!/bin/bash
cd ./dev
ls *.tgz >version.txt
date >>version.txt
rm -f smartcontrolsmui.tgz
find . -type f -name *.tgz | xargs -I {} mv {} smartcontrolsmui.tgz
ls
cp smartcontrolsmui.tgz ../smartcontrolsmui.tgz