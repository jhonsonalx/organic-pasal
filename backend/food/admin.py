from django.contrib import admin
from .models import *
from django.utils.html import format_html


def make_order_received(modeladmin, request, queryset):
    queryset.update(received=True)

# def send_mail(modeladmin, request, queryset):
#     queryset.update()


make_order_received.short_description = 'Update orders to order received'
# send_mail.short_description = 'Send Mail'


class OrderAdmin(admin.ModelAdmin):
    list_display = ['user',
                    'order_items',
                    'total_price',
                    'ordered',
                    'status',
                    'ordered_date'
                    ]
    list_display_links = [
        'user'
    ]
    list_filter = ['ordered', 'status']
    search_fields = [
        'user__username',
        'ref_code'
    ]
    actions = [make_order_received]

    def order_items(self, obj):
        return format_html(('</br>').join([str(p) for p in obj.items.all()]))


class AddressAdmin(admin.ModelAdmin):
    list_display = [
        'user',
        'full_name',
        'phone_number',
        'street_address',
        'apartment_address',
        'default'
    ]
    list_filter = ['default', 'full_name', 'street_address']
    search_fields = ['user', 'full_name', 'street_address']


class ItemAdmin(admin.ModelAdmin):
    list_display = [
        'image_tag',
        'name',
        'price',
        'category',
        'is_active'
    ]
    list_filter = ['name', 'category', 'is_active']
    search_fields = ['name']
    exclude = ['slug']
    # formfield_overrides = {
    #     models.TextField : {'widget':TinyMCE()}
    # }


class ItemCategoryAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'is_active'
    ]
    list_filter = ['name', 'is_active']
    search_fields = ['name']
    exclude = ['slug']


class OrderItemAdmin(admin.ModelAdmin):
    list_display = [
        'user',
        'item',
        'quantity',
        'ordered',
        'ordered_date'
    ]
    list_filter = ['user', 'item', 'ordered', 'ordered_date']
    search_fields = ['user', 'item']
    exclude = ['ordered_date']


class PaymentMethodAdmin(admin.ModelAdmin):
    list_display = [
        'payment_name',
        'payment_code'
    ]
    list_filter = ['payment_name', 'payment_code']
    search_fields = ['payment_name', 'payment_code']


class CouponAdmin(admin.ModelAdmin):
    list_display = [
        'code',
        'amount',
        'min_total'
    ]
    list_filter = ['code', 'amount', 'min_total']
    search_fields = ['code', 'amount', 'min_total']

    
class RefundAdmin(admin.ModelAdmin):
    list_display = [
        'order',
        'reason',
        'accepted'

    ]
    list_filter = ['order', 'accepted']
    search_fields = ['order', 'accepted']


class SubscribeAdmin(admin.ModelAdmin):
    list_display = [
        'email'
    ]
    list_filter = ['email']
    search_fields = ['email']
    # actions = [send_mail]


class ContactAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'email',
        'phone'
    ]
    list_filter = ['name', 'phone']
    search_fields = ['name', 'phone']


class ReviewAdmin(admin.ModelAdmin):
    list_display = [
        'user',
        'item',
        'rating',
        'review_date'
    ]
    list_filter = ['user', 'item', 'rating']
    search_fields = ['user', 'item']


class PostAdmin(admin.ModelAdmin):
    list_display = [
        'image_tag',
        'title',
        'author',
        'created_on',
        'status'
    ]
    list_filter = ['title', 'author', 'status']
    search_fields = ['title', 'author']
    

class OfferAdmin(admin.ModelAdmin):
    list_display = [
        'image_tag',
        'title',
        'offer_type'
    ]
    list_filter = ['title', 'offer_type']
    search_fields = ['title', 'offer_type']


class WishlistAdmin(admin.ModelAdmin):
    list_display = [
        'user',
        'product'
    ]
    list_filter = ['product']
    search_fields = ['product']


admin.site.register(Product, ItemAdmin)
admin.site.register(Category, ItemCategoryAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Wishlist, WishlistAdmin)
