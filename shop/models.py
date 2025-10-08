from django.db import models

def get_default_category():
    category, created = Category.objects.get_or_create(name="Sin categoría")
    return category.pk

def get_default_supplier():
    supplier, created = Supplier.objects.get_or_create(name="Proveedor genérico", email="example@gmail.com", phone_number="00000000")
    return supplier.pk

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE, null=True, default=get_default_category)
    supplier = models.ForeignKey('Supplier', on_delete=models.CASCADE, null=True, default=get_default_supplier)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name
    
class Supplier(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=8)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name
    
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image_url = models.URLField()
    
    def __str__(self):
        return f"Image for {self.product.name}"
    