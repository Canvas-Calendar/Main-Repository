# https://canvasapi.readthedocs.io/en/latest/getting-started.html

# -- install package
#!pip install canvasapi

# -- import canvas
from canvasapi import Canvas
# -- UDCanvas API URL
API_URL = 'https://canvas.instructure.com/'
# -- your API token
API_KEY = '25~5i6ys2phuRcMRi06V0grW4u5O5x6f8KyGcX38DSsyWOqqXS0XmZ7jUrfZVtJouTE'
# -- connect to UDCanvas API
canvas = Canvas(API_URL, API_KEY)
# -- fetch all courses
# GET: https://canvas.instructure.com/api/v1/courses?access_token=<access_token>
courses = canvas.get_courses()
# -- format: <course_code> <course_name> <enrollment_state> <course_id>


#Generate HTML file with courses

print("Now Opening File:")
f=open("coursesFound.html","w+")
f.close

print("Now generating file:")
for course in courses:
    f=open("coursesFound.html","a+")
    f.write(str(course))
    f.write("\n")
    f.close

print("Printing Text File:")
t=open("coursesFound.html","r")
print(t.read())







#for course in courses:    
  #  print(course)
    #Generate File
  #  print("Now Generating File")
  #  f=open("coursesFound.html", "a")
    #for i in range(500):
  #  f.write(str(course))
  #  f.write("\n")
  #  f.close
 #   print("Text File:")
 #   t=open("coursesFound.html", "r")
 #   print(t.read())
#course="Test Text"
#Generate File
   # print("Now Generating File")
  #  f=open("coursesFound.txt", "w+")
#for i in range(500):
   # f.write(course)
  #  f.close
#print("Text File:")
#t=open("coursesFound.txt", "r")
#print(t.read())



