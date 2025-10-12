from django.shortcuts import render

from django.http import JsonResponse
from django.core.cache import cache
from .utils import generate_unique_key

from rest_framework.decorators import api_view
from rest_framework.response import Response



# Create your views here.

@api_view(['POST'])
def create_secret_key(request):
    key = generate_unique_key()
    value = request.data.get('value')
    print(value)
    cache.set(key, value, timeout=900)
    return Response({'key': key})

@api_view(['GET'])
def get_secret_value(request):
    key = request.query_params.get('key')
    value = cache.get(key)
    if value:
        cache.delete(key)
        return JsonResponse({'value': value})
    return JsonResponse({'error': 'Key not found or expired'}, status=404)