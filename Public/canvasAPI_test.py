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


#Generate HTML file with list of courses
print("Now Opening File:")
f=open("coursesFound.html","w+")
f.close

print("Now generating file:")
for course in courses:
    f=open("coursesFound.html","a+")
    print("Course is:")
    print(str(course))
    f.write(str(course))
    f.write("\n")
    f.close

print("Printing Text File:")
t=open("coursesFound.html","r")
print(t.read())

