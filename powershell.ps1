# Step 1: Login to Azure
Connect-AzAccount

# Step 2: Create a Resource Group (Skip if you already have one)
$resourceGroupName = "MyResourceGroup"
$location = "East US"
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Step 3: Create a Storage Account
$storageAccountName = "mystorageaccount" + $(Get-Random)
$storageSkuName = "Standard_LRS" # Standard Locally-Redundant Storage
$storageKind = "StorageV2" # General-purpose v2 account
$storageAccessTier = "Hot"

New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $storageSkuName `
                     -Kind $storageKind `
                     -AccessTier $storageAccessTier