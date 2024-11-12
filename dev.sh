#!/bin/bash

#!/bin/bash

cd ./dev
ls 
rm -f smartcontrolmui.tgz
ls *.tgz >version.txt
date >>version.txt
find . -type f -name *.tgz | xargs -I {} mv {} smartcontrolsmui.tgz
cp smartcontrolsmui.tgz ../smartcontrolsmui.tgz