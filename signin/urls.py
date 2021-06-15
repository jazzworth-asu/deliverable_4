from django.urls import path

from signin.views import view_index
from signin.views import index

urlpatterns = [
    path('', view_index, name='index')
]
