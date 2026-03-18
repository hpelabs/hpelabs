# Use a slim Ruby image as the base
FROM ruby:3.3-slim

# Set environment variables for UTF-8 encoding and non-interactive package installation
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    DEBIAN_FRONTEND=noninteractive

# Install essential build tools and dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /srv/jekyll

# Add Zscaler root CA
COPY zscaler.pem /tmp/zscaler.pem
RUN cat /tmp/zscaler.pem >> /usr/lib/ssl/cert.pem

# Copy the Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install Bundler and project dependencies
RUN gem install bundler && bundle install

# Expose port 4000 (site) and 35729 (livereload)
EXPOSE 4000
EXPOSE 35729

# Start the Jekyll development server with live reloading
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--livereload-port", "35729", "--force_polling"]
