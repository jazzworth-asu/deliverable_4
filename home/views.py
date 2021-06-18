from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
# Create your views here.

import logging
logger = logging.getLogger(__name__)

def index(request):
    return render(request, 'index.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def signup(request):
    if(request.method == 'POST'):
        if(request.POST['password'] == request.POST['verifyPassword']):
            try:
                user = User.objects.get(username=request.POST['username'])
                return render(request, 'signup.html', {'error': 'Username not available'})
            except User.DoesNotExist:
                user = User.objects.create_user(
                    request.POST['username'], password=request.POST['password'])
                auth.login(request, user)
                return redirect('home')
        else:
            return render(request, 'signup.html', {'error': 'Mismatch passwords'})
    else:
        return render(request, 'signup.html')
        
def signin(request):
    if(request.method == 'POST'):
        #see if it's an actual user
        user = auth.authenticate(username=request.POST['username'], password=request.POST['password'])
        if user is not None:
            auth.login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'signin.html', { 'error' : 'Incorrect username or password'})
    else:
        return render(request, 'signin.html')


def signout(request):
    return render(request, 'signout.html')