# from rest_framework import serializers
# from .models import Student

# class LoginSerializer(serializers.Serializer):

#     email = serializers.EmailField()

#     password = serializers.CharField()

# from rest_framework import serializers


# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField()


# class RegisterSerializer(serializers.Serializer):
#     name = serializers.CharField(max_length=255)
#     email = serializers.EmailField()
#     password = serializers.CharField(min_length=6)

# from rest_framework import serializers


# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField()


# class RegisterSerializer(serializers.Serializer):
#     name = serializers.CharField(max_length=255)
#     email = serializers.EmailField()
#     phone_number = serializers.CharField(max_length=15, required=False, allow_blank=True)
#     password = serializers.CharField(min_length=6)


# class AdminCreateSerializer(serializers.Serializer):
#     name = serializers.CharField(max_length=255)
#     email = serializers.EmailField()
#     password = serializers.CharField(min_length=6)
#     role = serializers.ChoiceField(choices=["admin", "super_admin"])

from rest_framework import serializers
from .constants import ROLE_ADMIN, ROLE_SUPER_ADMIN


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class RegisterSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    phone_number = serializers.CharField(
        max_length=15,
        required=False,
        allow_blank=True,
    )
    password = serializers.CharField(min_length=6)


class AdminCreateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    password = serializers.CharField(min_length=6)

    role = serializers.ChoiceField(
        choices=[
            ROLE_ADMIN,
            ROLE_SUPER_ADMIN,
        ]
    )