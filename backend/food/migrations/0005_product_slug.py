# Generated by Django 4.0.5 on 2022-08-25 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0004_itemimage_alter_category_options_wishlist_review_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='slug',
            field=models.SlugField(blank=True, max_length=100, null=True, unique=True),
        ),
    ]