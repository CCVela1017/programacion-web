import secrets

def generate_unique_key(length=10):
    return secrets.token_urlsafe(length)[:length]
