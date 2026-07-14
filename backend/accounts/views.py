# # 

# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status
# from django.contrib.auth.hashers import make_password, check_password

# from .models import Student
# from .serializers import LoginSerializer, RegisterSerializer


# @api_view(['POST'])
# def register_user(request):
#     serializer = RegisterSerializer(data=request.data)
#     if not serializer.is_valid():
#         return Response({
#             "success": False,
#             "message": "Please check the details you entered.",
#             "errors": serializer.errors,
#         }, status=status.HTTP_400_BAD_REQUEST)

#     name = serializer.validated_data["name"]
#     email = serializer.validated_data["email"]
#     password = serializer.validated_data["password"]

#     if Student.objects.filter(email__iexact=email).exists():
#         return Response({
#             "success": False,
#             "message": "An account with this email already exists.",
#         }, status=status.HTTP_400_BAD_REQUEST)

#     student = Student.objects.create(
#         name=name,
#         email=email,
#         password=make_password(password),  # hashed, never stored raw
#         role="user",
#     )

#     return Response({
#         "success": True,
#         "message": "Registration successful.",
#         "user": {
#             "id": student.id,
#             "name": student.name,
#             "email": student.email,
#             "role": student.role,
#         },
#     }, status=status.HTTP_201_CREATED)


# @api_view(['POST'])
# def login_user(request):
#     serializer = LoginSerializer(data=request.data)
#     if not serializer.is_valid():
#         return Response({
#             "success": False,
#             "message": "Please enter both email and password.",
#         }, status=status.HTTP_400_BAD_REQUEST)

#     email = serializer.validated_data["email"]
#     password = serializer.validated_data["password"]

#     try:
#         student = Student.objects.get(email__iexact=email)
#     except Student.DoesNotExist:
#         return Response({
#             "success": False,
#             "message": "Invalid email or password.",
#         }, status=status.HTTP_401_UNAUTHORIZED)

#     if not check_password(password, student.password):
#         return Response({
#             "success": False,
#             "message": "Invalid email or password.",
#         }, status=status.HTTP_401_UNAUTHORIZED)

#     return Response({
#         "success": True,
#         "message": "Login successful.",
#         "user": {
#             "id": student.id,
#             "name": student.name,
#             "email": student.email,
#             "role": student.role,
#         },
#     }, status=status.HTTP_200_OK)


# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status
# from django.contrib.auth.hashers import make_password, check_password

# from .models import Student
# from .serializers import (
#     LoginSerializer,
#     RegisterSerializer,
#     AdminCreateSerializer,
# )

# from .constants import (
#     ROLE_USER,
#     ROLE_ADMIN,
#     ROLE_SUPER_ADMIN,
# )

# @api_view(['POST'])
# def register_user(request):
#     serializer = RegisterSerializer(data=request.data)

#     print("RAW DATA RECEIVED:", request.data)

#     if not serializer.is_valid():
#         print("VALIDATION ERRORS:", serializer.errors)
#         return Response({
#             "success": False,
#             "message": "Please check the details you entered.",
#             "errors": serializer.errors,
#         }, status=status.HTTP_400_BAD_REQUEST)

#     name = serializer.validated_data["name"]
#     email = serializer.validated_data["email"]
#     phone_number = serializer.validated_data.get("phone_number", "")
#     password = serializer.validated_data["password"]

#     if Student.objects.filter(email__iexact=email).exists():
#         return Response({
#             "success": False,
#             "message": "An account with this email already exists.",
#         }, status=status.HTTP_400_BAD_REQUEST)

#     student = Student.objects.create(
#     name=name,
#     email=email,
#     phone_number=phone_number,
#     password=make_password(password),
#     role=ROLE_USER,
# )
#     )

#     return Response({
#         "success": True,
#         "message": "Registration successful.",
#         "user": {
#             "id": student.id,
#             "name": student.name,
#             "email": student.email,
#             "phone_number": student.phone_number,
#             "role": student.role,
#         },
#     }, status=status.HTTP_201_CREATED)


# @api_view(['POST'])
# def login_user(request):
#     serializer = LoginSerializer(data=request.data)
#     if not serializer.is_valid():
#         return Response({
#             "success": False,
#             "message": "Please enter both email and password.",
#         }, status=status.HTTP_400_BAD_REQUEST)

#     email = serializer.validated_data["email"]
#     password = serializer.validated_data["password"]

#     try:
#         student = Student.objects.get(email__iexact=email)
#     except Student.DoesNotExist:
#         return Response({
#             "success": False,
#             "message": "Invalid email or password.",
#         }, status=status.HTTP_401_UNAUTHORIZED)

#     if not check_password(password, student.password):
#         return Response({
#             "success": False,
#             "message": "Invalid email or password.",
#         }, status=status.HTTP_401_UNAUTHORIZED)

#     return Response({
#         "success": True,
#         "message": "Login successful.",
#         "user": {
#             "id": student.id,
#             "name": student.name,
#             "email": student.email,
#             "role": student.role,   # <-- this is what LoginPage.jsx needs for role-based redirect
#         },
#     }, status=status.HTTP_200_OK)

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.hashers import make_password, check_password

from .models import Student
from .serializers import (
    LoginSerializer,
    RegisterSerializer,
    AdminCreateSerializer,
)

from .constants import (
    ROLE_USER,
    ROLE_ADMIN,
    ROLE_SUPER_ADMIN,
)


@api_view(["POST"])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)

    print("RAW DATA RECEIVED:", request.data)

    if not serializer.is_valid():
        print("VALIDATION ERRORS:", serializer.errors)
        return Response(
            {
                "success": False,
                "message": "Please check the details you entered.",
                "errors": serializer.errors,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    name = serializer.validated_data["name"]
    email = serializer.validated_data["email"]
    phone_number = serializer.validated_data.get("phone_number", "")
    password = serializer.validated_data["password"]

    if Student.objects.filter(email__iexact=email).exists():
        return Response(
            {
                "success": False,
                "message": "An account with this email already exists.",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    student = Student.objects.create(
        name=name,
        email=email,
        phone_number=phone_number,
        password=make_password(password),
        role=ROLE_USER,
    )

    return Response(
        {
            "success": True,
            "message": "Registration successful.",
            "user": {
                "id": student.id,
                "name": student.name,
                "email": student.email,
                "phone_number": student.phone_number,
                "role": student.role,
            },
        },
        status=status.HTTP_201_CREATED,
    )


@api_view(["POST"])
def login_user(request):
    serializer = LoginSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(
            {
                "success": False,
                "message": "Please enter both email and password.",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    email = serializer.validated_data["email"]
    password = serializer.validated_data["password"]

    try:
        student = Student.objects.get(email__iexact=email)

    except Student.DoesNotExist:
        return Response(
            {
                "success": False,
                "message": "Invalid email or password.",
            },
            status=status.HTTP_401_UNAUTHORIZED,
        )

    if not check_password(password, student.password):
        return Response(
            {
                "success": False,
                "message": "Invalid email or password.",
            },
            status=status.HTTP_401_UNAUTHORIZED,
        )

    return Response(
        {
            "success": True,
            "message": "Login successful.",
            "user": {
                "id": student.id,
                "name": student.name,
                "email": student.email,
                "role": student.role,
            },
        },
        status=status.HTTP_200_OK,
    )