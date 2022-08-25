# Generated by Django 3.1.7 on 2022-06-07 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=130)),
                ('Email', models.CharField(max_length=130)),
                ('Phone', models.CharField(max_length=10)),
                ('Description', models.TextField()),
                ('Date', models.DateField()),
            ],
        ),
    ]