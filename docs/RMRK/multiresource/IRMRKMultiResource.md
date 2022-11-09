# IRMRKMultiResource

*RMRK team*

> IRMRKMultiResource

Interface smart contract of the RMRK multi resource module.



## Methods

### acceptResource

```solidity
function acceptResource(uint256 tokenId, uint64 resourceId) external nonpayable
```

Accepts a resource at from the pending array of given token.

*Migrates the resource from the token&#39;s pending resource array to the token&#39;s active resource array.Active resources cannot be removed by anyone, but can be replaced by a new resource.Requirements:  - The caller must own the token or be approved to manage the token&#39;s resources  - `tokenId` must exist.Emits an {ResourceAccepted} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token for which to accept the pending resource |
| resourceId | uint64 | ID of the resource being accepted |

### approveForResources

```solidity
function approveForResources(address to, uint256 tokenId) external nonpayable
```

Used to grant permission to the user to manage token&#39;s resources.

*This differs from transfer approvals, as approvals are not cleared when the approved party accepts or  rejects a resource, or sets resource priorities. This approval is cleared on token transfer.Only a single account can be approved at a time, so approving the `0x0` address clears previous approvals.Requirements:  - The caller must own the token or be an approved operator.  - `tokenId` must exist.Emits an {ApprovalForResources} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | Address of the account to grant the approval to |
| tokenId | uint256 | ID of the token for which the approval to manage the resources is granted |

### getActiveResourcePriorities

```solidity
function getActiveResourcePriorities(uint256 tokenId) external view returns (uint16[])
```

Used to retrieve the priorities of the active resoources of a given token.

*Resource priorities are a non-sequential array of uint16 values with an array size equal to active resource  priorites.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token for which to retrieve the priorities of the active resources |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16[] | uint16[] An array of priorities of the active resources of the given token |

### getActiveResources

```solidity
function getActiveResources(uint256 tokenId) external view returns (uint64[])
```

Used to retrieve IDs of the active resources of given token.

*Resource data is stored by reference, in order to access the data corresponding to the ID, call  `getResourceMetadata(tokenId, resourceId)`.You can safely get 10k*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to retrieve the IDs of the active resources |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64[] | uint64[] An array of active resource IDs of the given token |

### getApprovedForResources

```solidity
function getApprovedForResources(uint256 tokenId) external view returns (address)
```

Used to retrieve the address of the account approved to manage resources of a given token.

*Requirements:  - `tokenId` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token for which to retrieve the approved address |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | address Address of the account that is approved to manage the specified token&#39;s resources |

### getPendingResources

```solidity
function getPendingResources(uint256 tokenId) external view returns (uint64[])
```

Used to retrieve IDs of the pending resources of given token.

*Resource data is stored by reference, in order to access the data corresponding to the ID, call  `getResourceMetadata(tokenId, resourceId)`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to retrieve the IDs of the pending resources |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64[] | uint64[] An array of pending resource IDs of the given token |

### getResourceMetadata

```solidity
function getResourceMetadata(uint256 tokenId, uint64 resourceId) external view returns (string)
```

Used to fetch the resource metadata of the specified token&#39;s active resource with the given index.

*Resources are stored by reference mapping `_resources[resourceId]`.Can be overriden to implement enumerate, fallback or other custom logic.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token from which to retrieve the resource metadata |
| resourceId | uint64 | Resource Id, must be in the active resources array |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | string The metadata of the resource belonging to the specified index in the token&#39;s active resources  array |

### getResourceOverwrites

```solidity
function getResourceOverwrites(uint256 tokenId, uint64 newResourceId) external view returns (uint64)
```

Used to retrieve the resource that will be overriden if a given resource from the token&#39;s pending array  is accepted.

*Resource data is stored by reference, in order to access the data corresponding to the ID, call  `getResourceMetadata(tokenId, resourceId)`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to check |
| newResourceId | uint64 | ID of the pending resource which will be accepted |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | uint64 ID of the resource which will be replaced |

### isApprovedForAllForResources

```solidity
function isApprovedForAllForResources(address owner, address operator) external view returns (bool)
```

Used to check whether the address has been granted the operator role by a given address or not.

*See {setApprovalForAllForResources}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the account that we are checking for whether it has granted the operator role |
| operator | address | Address of the account that we are checking whether it has the operator role or not |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | bool The boolean value indicating wehter the account we are checking has been granted the operator role |

### rejectAllResources

```solidity
function rejectAllResources(uint256 tokenId, uint256 maxRejections) external nonpayable
```

Rejects all resources from the pending array of a given token.

*Effecitvely deletes the pending array.Requirements:  - The caller must own the token or be approved to manage the token&#39;s resources  - `tokenId` must exist.Emits a {ResourceRejected} event with resourceId = 0.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token of which to clear the pending array |
| maxRejections | uint256 | to prevent from rejecting resources which arrive just before this operation. |

### rejectResource

```solidity
function rejectResource(uint256 tokenId, uint64 resourceId) external nonpayable
```

Rejects a resource from the pending array of given token.

*Removes the resource from the token&#39;s pending resource array.Requirements:  - The caller must own the token or be approved to manage the token&#39;s resources  - `tokenId` must exist.Emits a {ResourceRejected} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token for which to reject the pending resource |
| resourceId | uint64 | ID of the resource being rejected |

### setApprovalForAllForResources

```solidity
function setApprovalForAllForResources(address operator, bool approved) external nonpayable
```

Used to add or remove an operator of resources for the caller.

*Operators can call {acceptResource}, {rejectResource}, {rejectAllResources} or {setPriority} for any token  owned by the caller.Requirements:  - The `operator` cannot be the caller.Emits an {ApprovalForAllForResources} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | Address of the account to which the operator role is granted or revoked from |
| approved | bool | The boolean value indicating whether the operator role is being granted (`true`) or revoked  (`false`) |

### setPriority

```solidity
function setPriority(uint256 tokenId, uint16[] priorities) external nonpayable
```

Sets a new priority array for a given token.

*The priority array is a non-sequential list of `uint16`s, where the lowest value is considered highest  priority.Value `0` of a priority is a special case equivalent to unitialized.Requirements:  - The caller must own the token or be approved to manage the token&#39;s resources  - `tokenId` must exist.  - The length of `priorities` must be equal the length of the active resources array.Emits a {ResourcePrioritySet} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to set the priorities for |
| priorities | uint16[] | An array of priorities of active resources. The succesion of items in the priorities array  matches that of the succesion of items in the active array |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### ApprovalForAllForResources

```solidity
event ApprovalForAllForResources(address indexed owner, address indexed operator, bool approved)
```

Used to notify listeners that owner has granted approval to the user to manage resources of all of their  tokens.



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | Address of the account that has granted the approval for all resources on all of their tokens |
| operator `indexed` | address | Address of the account that has been granted the approval to manage the token&#39;s resources on all of the  tokens |
| approved  | bool | Boolean value signifying whether the permission has been granted (`true`) or revoked (`false`) |

### ApprovalForResources

```solidity
event ApprovalForResources(address indexed owner, address indexed approved, uint256 indexed tokenId)
```

Used to notify listeners that owner has granted an approval to the user to manage the resources of a  given token.

*Approvals must be cleared on transfer*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | Address of the account that has granted the approval for all token&#39;s resources |
| approved `indexed` | address | Address of the account that has been granted approval to manage the token&#39;s resources |
| tokenId `indexed` | uint256 | ID of the token on which the approval was granted |

### ResourceAccepted

```solidity
event ResourceAccepted(uint256 indexed tokenId, uint64 indexed resourceId, uint64 indexed overwritesId)
```

Used to notify listeners that a resource object at `resourceId` is accepted by the token and migrated  from token&#39;s pending resources array to active resources array of the token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | ID of the token that had a new resource accepted |
| resourceId `indexed` | uint64 | ID of the resource that was accepted |
| overwritesId `indexed` | uint64 | ID of the resource that would be overwritten |

### ResourceAddedToToken

```solidity
event ResourceAddedToToken(uint256 indexed tokenId, uint64 indexed resourceId, uint64 indexed overwritesId)
```

Used to notify listeners that a resource object at `resourceId` is added to token&#39;s pending resource  array.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | ID of the token that received a new pending resource |
| resourceId `indexed` | uint64 | ID of the resource that has been added to the token&#39;s pending resources array |
| overwritesId `indexed` | uint64 | ID of the resource that would be overwritten |

### ResourcePrioritySet

```solidity
event ResourcePrioritySet(uint256 indexed tokenId)
```

Used to notify listeners that token&#39;s prioritiy array is reordered.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | ID of the token that had the resource priority array updated |

### ResourceRejected

```solidity
event ResourceRejected(uint256 indexed tokenId, uint64 indexed resourceId)
```

Used to notify listeners that a resource object at `resourceId` is rejected from token and is dropped  from the pending resources array of the token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | ID of the token that had a resource rejected |
| resourceId `indexed` | uint64 | ID of the resource that was rejected |

### ResourceSet

```solidity
event ResourceSet(uint64 indexed resourceId)
```

Used to notify listeners that a resource object is initialized at `resourceId`.



#### Parameters

| Name | Type | Description |
|---|---|---|
| resourceId `indexed` | uint64 | ID of the resource that was initialized |



