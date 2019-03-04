## Command Line Basics Exercise

* Make a new folder named "Animals"
```
mkdir Animals
```

* Inside of "Animals" add 2 directories: "AwesomeAnimals" and "SketchyAnimals"
```
cd Animals
mkdir AwesomeAnimals SketchyAnimals
```

* Inside of "AwesomeAnimals" add the following files: "Capybara.js", "ArcticFox.html", and "TreeFrog.txt"
```
cd AwesomeAnimals
touch Capybara.js ArcticFox.html TreeFrog.txt
```

* Inside of "SketchyAnimals" add the following files: "BrownRecluse.html" and "BulletAnt.js"
```
cd ../SketchyAnimals
touch BrownRecluse.html BulletAnt.js
```

* Also inside of "SketchyAnimals" create a "Snakes" directory.  Snakes are extra sketchy.
```
mkdir Snakes
```

* Inside the "Snakes" directory create the following files: "Cobra.css" and "ReticulatedPython.py"
```
cd Snakes
touch Cobra.css ReticulatedPython.py
```

* You have a change of heart and decide that Bullet Ants are no longer sketchy. Remove the "BulletAnt.js" file.
```
cd ..
rm BulletAnt.js
```

* All animal life goes extinct. Delete the entire "Animals" directory
```
cd ../../
rm -rf Animals
```