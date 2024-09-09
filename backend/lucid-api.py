def generate_aws_diagram():
    # Call Lucidchart API to create a new diagram based on AWS infra data
    lucidchart_client = LucidchartClient(api_key='your-lucidchart-api-key')
    diagram = lucidchart_client.create_diagram('AWS Infrastructure')
    return diagram.get_link()
