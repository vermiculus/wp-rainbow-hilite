#!/bin/bash
cd sources/rainbow
git stage "*"
git commit -m"-"
git push
cd ../..
make --jobs all
git stage "*"
git commit -m"-"
git push
