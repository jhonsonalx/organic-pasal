# Generated by Django 4.0.5 on 2022-08-27 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0005_product_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
