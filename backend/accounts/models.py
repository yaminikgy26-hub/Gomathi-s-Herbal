# from django.db import models

# class Student(models.Model):

#     ROLE_CHOICES = (
#         ("superadmin", "Super Admin"),
#         ("student", "Student"),
#     )

#     name = models.CharField(max_length=100)

#     email = models.EmailField(unique=True)

#     Phone_number=models.

#     password = models.CharField(max_length=255)

#     role = models.CharField(
#         max_length=20,
#         choices=ROLE_CHOICES,
#         default="student"
#     )

#     created_at = models.DateTimeField(
#         auto_now_add=True
#     )

#     def __str__(self):
#         return self.name

# 

# from django.db import models
# from .constants import ROLE_CHOICES

# class Student(models.Model):

#     # ROLE_CHOICES = (
#     #     ("user", "User"),
#     #     ("admin", "Admin"),
#     #     ("super_admin", "Super Admin"),
#     from .constants import ROLE_CHOICES
#     )

#     name = models.CharField(max_length=100)

#     email = models.EmailField(unique=True)

#     phone_number = models.CharField(
#         max_length=15,
#         blank=True,
#         null=True,
#     )

#     password = models.CharField(max_length=255)

#     role = models.CharField(
#         max_length=20,
#         choices=ROLE_CHOICES,
#         default="user",
#     )

#     auth_token = models.CharField(
#         max_length=64,
#         null=True,
#         blank=True,
#         unique=True,
#     )

#     created_at = models.DateTimeField(
#         auto_now_add=True,
#     )

#     def __str__(self):
#         return self.name

from django.db import models
from .constants import ROLE_CHOICES, ROLE_USER


class Student(models.Model):

    name = models.CharField(max_length=100)

    email = models.EmailField(unique=True)

    phone_number = models.CharField(
        max_length=15,
        blank=True,
        null=True,
    )

    password = models.CharField(max_length=255)

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default=ROLE_USER,
    )

    auth_token = models.CharField(
        max_length=64,
        null=True,
        blank=True,
        unique=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return self.name