from django.shortcuts import render
from django.http import HttpResponse

#points to a template file
def view_index(request):
    return render(request, 'signin/index.html')

#initial test without template file
def index(request):
    return HttpResponse('testing the pieces and parts before adding any template files.')
