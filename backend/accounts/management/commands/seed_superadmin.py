# 

from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from accounts.models import Student


class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        if not Student.objects.filter(email="admin@gmail.com").exists():

            Student.objects.create(
                name="Super Admin",
                email="admin@gmail.com",
                password=make_password("admin123"),
                role="super_admin",
            )

            self.stdout.write(
                self.style.SUCCESS("Super Admin Created")
            )

        else:

            self.stdout.write(
                self.style.WARNING("Super Admin Already Exists")
            )