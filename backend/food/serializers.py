from users.serializers import UserSerializer
from .models import *
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')

class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemImage
        fields = ('__all__')

class ProductSerializer(serializers.ModelSerializer):
     category = CategorySerializer()
     is_wishlist = serializers.SerializerMethodField('is_wishlist_added')

     def is_wishlist_added(self, obj):
        user_id = self.context.get("user_id")
        if user_id:
            for wishlist in Wishlist.objects.filter(user__id=user_id):
                if obj.id == wishlist.product.id:
                    return True
            else:
                return False
        return False

     class Meta:
        model = Product
        fields = ('__all__')

class WishlistSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    product = ProductSerializer()

    class Meta:
        model = Wishlist
        fields = ('__all__')

class OrderItemSerializer(serializers.ModelSerializer):
     user = UserSerializer()
     item = ProductSerializer()

     class Meta:
        model = OrderItem
        fields = ('__all__')

class AddressSerializer(serializers.ModelSerializer):
     class Meta:
        model = Address
        fields = ('__all__')

class OrderSerializer(serializers.ModelSerializer):
     user = UserSerializer()
     items = OrderItemSerializer(many=True)
     shipping_address = AddressSerializer()

     class Meta:
        model = Order
        fields = ('__all__')



class ContactSerializer(serializers.ModelSerializer):
     class Meta:
        model = Contact
        fields = ('__all__')


class ReviewSerializer(serializers.ModelSerializer):
     class Meta:
        model = Review
        fields = ('__all__')

class PostSerializer(serializers.ModelSerializer):
     class Meta:
        model = Post
        fields = ('__all__')



