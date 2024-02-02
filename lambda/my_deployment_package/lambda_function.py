import json
import psycopg2
from psycopg2.extras import RealDictCursor
import boto3
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    secret_name = "human_rights_member"
    region_name = "us-east-1"

    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )

    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except ClientError as e:
        # For a list of exceptions thrown, see
        # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        raise e

    # Decrypts secret using the associated KMS key.
    secret = get_secret_value_response['SecretString']

    # member_con = psycopg2.connect(
    #     host = endpoint,
    #     db = db_name,
    #     user = db_user,
    #     password = password
    # )
    # member_cur = member_con.cursor(cursor_factory=RealDictCursor)
    member_params = event
    print(event)

    return {
        'statusCode': 200,
        'body': json.dumps("working so far")
    }
