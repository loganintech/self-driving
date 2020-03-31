How to Set Up Makefile:

1. Open the Makefile in a text editor.
2. Set the value of the HWNAME variable to the name of your TeX file (without the .tex file extension).
3. Note: if you have a bibliography file for the assignment, give it the same name as your TeX file (e.g. if the TeX file is capstone.tex, the bib file should be capstone.bib).

If you set up the Makefile correctly, you should see a success message in the command line output (the output's a bit messy, I know, but as long as you see the success message somewhere in the output it worked). You will also see a PDF of your document and a tar file containing the source code for the document.

If you did not set it up correctly, you will only see an error message in the command line output saying to set HWNAME to the name of your TeX file.
