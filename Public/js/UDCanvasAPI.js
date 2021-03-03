// var udcanvas = new UDCanvasAPI(access_token);

function UDCanvasAPI(access_token) {
    this.token  = access_token;
    this.api    = 'https://udel.instructure.com/api/v1';
    this.cors   = 'https://sokotaro.hopto.org/proxy?url=';
    this.params = "?per_page=100&access_token=";
    this.loadResources = function(resource) {
        var that = this;
        url = this.cors+encodeURIComponent(this.api+resource+this.params+this.token);

        $.getJSON(url).done( function(data) {
            that.coursesRAW  = [];
            that.courses     = [];
            that.calendars   = [];
            $.each(data, function(i, e) {
                if (e.hasOwnProperty('name')) {
                  	e.calendar['course_id'] = e.id;
                    e.calendar['name'] = e.name;
                    e.calendar['uuid'] = e.uuid;
                  	that.calendars.push(e.calendar);
                  	that.calendars.sort(function(a,b){ return a.course_id - b.course_id; });

                    var resource2 = '/courses/'+e.id+'/assignments';
                    var url2 = that.cors+encodeURIComponent(that.api+resource2+that.params+that.token);
                    $.getJSON(url2).done( function(data2) {
                        e.assignments = data2;
                        e.assignments.sort(function(a,b){ return a.id - b.id; });
                        that.coursesRAW.push(e);
                        that.coursesRAW.sort(function(a,b){ return a.id - b.id; });

                        var assignments = [];
                        $.each(e.assignments, function(index, element) {
                            assignments.push({
                                'assignment_id': element['id'],
                                'course_id': element['course_id'],
                                'name': element['name'],
                                'due_at': element['due_at'],
                                'description': element['description'],
                                'html_url': element['html_url'],
                                'submissions_download_url': element['submissions_download_url'],
                                'grading_type': element['grading_type']
                            });
                        });
                        assignments.sort(function(a,b) { return a.assignment_id - b.assignment_id });
                        var course = {
                            'course_id': e['id'],
                            'name': e['name'],
                            'course_code': e['course_code'],
                            'start_at': e['start_at'],
                            'uuid': e['uuid'],
                            'enrollments': e['enrollments'],
                            'calendar': e['calendar'],
                            'assignments': assignments
                        };
                        that.courses.push(course);
                        that.courses.sort(function(a,b) { return a.course_id - b.course_id; });
                    });
                }
            });
            return that;
        });
        return this;
    };
    this.load = function() { return this.loadResources('/courses'); };
    this.getCourses = function() {
        return this.courses;
    };
    this.getCourse = function(course_id) {
        return $.grep(this.courses, function(e, i) {
            return e.course_id === course_id;
        })[0];
    };
    this.getCalendars = function() {
     		return this.calendars;
    };
  	this.getCalendar = function(course_id) {
        return $.grep(this.calendars, function(e, i) {
            return e.course_id === course_id;
        })[0];
    };
    this.getAssignments = function(course_id) {
        return $.grep(this.courses, function(e, i) {
            return e.course_id === course_id;
        })[0].assignments;
    };
    this.getAssignment = function(course_id, assignment_id) {
        return $.grep($.grep(this.courses, function(e, i) {
            return e.course_id === course_id;
        })[0].assignments, function(a, i) {
            return a.assignment_id === assignment_id;
        })[0];
    };
    this.load();
}
